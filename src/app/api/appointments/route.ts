import { NextResponse } from 'next/server';
import { getClient } from '@/lib/apollo-client';
import { ALL_APPOINTMENTS_QUERY } from './appointments.gql';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');

  const { data } = await getClient().query({ 
    query: ALL_APPOINTMENTS_QUERY,
    variables: {status}
  });
  console.log('--------------------------------------------------------');
  
  console.log(data);
  
  return NextResponse.json(data.allAppointments);
}