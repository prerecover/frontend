'use client';
import { Avatar } from '@/features/AccountBlock/avatar';
import AccountDesktopMenu from './desktop-menu';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
// import AccountMainForm from '@/features/AccountBlock/main-form';
// import AccountMedForm from '@/features/AccountBlock/med-form';

export default function AccountBlock() {
  const medFormSchema = z.object({
    age: z.number(),
    height: z.number(),
    weight: z.number(),
    pressureStart: z.number(),
    pressureEnd: z.number(),
    oxygen: z.number(),
    pulse: z.number(),
    allergy: z.string(),
    sleepTime: z.number(),
    temperature: z.number(),
  });
  const medForm = useForm<z.infer<typeof medFormSchema>>({
    resolver: zodResolver(medFormSchema),
    defaultValues: { age: 12 },
  });
  console.log(medForm);
  const userFormSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    number: z.string(),
    email: z.string(),
    login: z.string(),
    address: z.string(),
    city: z.string(),
    birthday: z.date(),
    sex: z.boolean(),
    countryTitle: z.string(),
  });
  const userForm = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      birthday: new Date(),
    },
  });
  console.log(userForm);
  return (
    <>
      <div className="h-[84px] desktop:h-[122px] desktop:flex desktop:px-4 desktop:gap-4 bg-white  relative z-0 mobile:flex-center rounded-[12px] desktop:m-4">
        <Avatar />
      </div>
      {/* <div className='desktop:m-4 desktop:flex desktop:flex-row flex-col gap-4'> */}
      {/* <AccountMainForm */}
      {/*   className="w-1/2 bg-white p-4 desktop:rounded-[12px] mobile:mt-10 mobile:w-full" */}
      {/*   form={userForm} */}
      {/*   medForm={medForm} */}
      {/* /> */}
      {/*     <AccountMedForm className='w-1/2 bg-white p-4 desktop:rounded-[12px] mobile:w-full' form={medForm} /> */}
      {/* </div> */}
      <AccountDesktopMenu />
    </>
  );
}
