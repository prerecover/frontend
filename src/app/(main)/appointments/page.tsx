import MobileHeader from '@/components/layout/mobileHeader';
import MainAppointments from '@/features/MainAppointments';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

export default async function Page() {
    const APPOINTMENTS_QUERY = gql(`
query Appointments {
    appointments {
        _id
        createdAt
        file
        notify
        online
        specialCheck
        status
        timeEnd
        timeStart
        title
        updatedAt
        clinic {
            _id
            address
            adminFirstName
            adminLastName
            adminNumber
            avatar
            city
            createdAt
            description
            country{
                title
            }
            email
            employees
            endTime
            isVerfied
            number
            rating
            specialization
            startTime
            title
            updatedAt
            workDays
        }
        doctors {
            _id
            avatar
            createdAt
            email
            firstName
            lastName
            mainStatus
            number
            online
            specialization
            surname
            updatedAt
            workExp
        }
        user {
            _id
            address
            avatar
            birthday
            createdAt
            email
            firstName
            isStaff
            isVerfied
            lastName
            login
            number
            online
            sex
            surname
            updatedAt
            verificationCode
        }
    }
}
    `);
    const { data } = await getClient().query({ query: APPOINTMENTS_QUERY });
    console.log(new Date());
    return (
        <>
            <MobileHeader title='Записи' />
            <div className='p-4'>
                <MainAppointments data={data.appointments} />
            </div>
        </>
    );
}
