'use client';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import { cn } from '@/lib/utils';
import { getCookie } from '@/shared/lib/hooks/useCookie';
import { ISaved } from '@/shared/types/saved.interface';
import { gql, useMutation, useQuery } from '@apollo/client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useToast } from '../ui/use-toast';
import { usePathname } from 'next/navigation';

const SAVED_QUERY = gql`
  query SavedAll {
    savedAll {
      _id
      clinic {
        _id
      }
      doctor {
        _id
      }
      service {
        _id
      }
    }
  }
`;

const CREATE_SAVED = gql(`
    mutation CreateSaved ($input: CreateSavedInput!){
        createSaved(
            createSavedInput: $input
        ) {
            _id
            clinic{
                _id
            }
            doctor {
                _id
            }
            service {
                _id
            }
        }
    }
    
`);
const REMOVE_SAVED = gql(`
    mutation RemoveSaved($id: String!){
        removeSaved(_id: $id) {
            _id
        }
    }
    
`);

export const SavedBtn = ({
  type,
  id,
}: {
  type: 'clinic' | 'doctor' | 'service';
  id: string;
}) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [token, setToken] = useState('');
  const [status, setStatus] = useState('');
  const pathname = usePathname();
  const { data, refetch } = useQuery(SAVED_QUERY, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  const [createSaved] = useMutation(CREATE_SAVED, {
    onCompleted: (data) => {
      toast({
        title: 'Сохранено!',
        variant: 'positive',
        duration: 500,
      });
      setStatus(data.createSaved._id);
    },
  });
  const [removeSaved] = useMutation(REMOVE_SAVED, {
    onCompleted: () => {
      toast({
        title: 'Удалено из сохраненного',
        variant: 'warning',
        duration: 500,
      });
      setStatus('');
    },
  });

  useEffect(() => {
    setToken(getCookie('access_token'));
    if (data) {
      data.savedAll.map((el: ISaved) => {
        switch (type) {
          case 'clinic':
            if (el.clinic && el.clinic._id === id) {
              setStatus(el._id);
            }
            break;
          case 'doctor':
            if (el.doctor && el.doctor._id === id) {
              setStatus(el._id);
            }
            break;
          case 'service':
            if (el.service && el.service._id === id) {
              setStatus(el._id);
            }
            break;
          default:
            break;
        }
      });
    } else {
      refetch();
    }
  }, [data, pathname]);

  const savedHandle = () => {
    switch (type) {
      case 'clinic':
        if (status.length == 0) {
          createSaved({
            variables: { input: { userId: user._id, clinicId: id } },
          });
        } else {
          removeSaved({ variables: { id: status } });
        }
        break;
      case 'doctor':
        if (status.length == 0) {
          createSaved({
            variables: { input: { userId: user._id, doctorId: id } },
          });
        } else {
          removeSaved({ variables: { id: status } });
        }
        break;
      case 'service':
        if (status.length == 0) {
          createSaved({
            variables: { input: { userId: user._id, serviceId: id } },
          });
        } else {
          removeSaved({ variables: { id: status } });
        }
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={cn(
        'w-[44px] h-[44px] rounded-full bg-white opacity-55 absolute flex-center right-1 top-1 cursor-pointer'
      )}
      onClick={() => savedHandle()}
    >
      <Image
        src={'/assets/saved-dark.svg'}
        width={24}
        height={24}
        alt="saved"
      />
    </div>
  );
};

export default SavedBtn;
