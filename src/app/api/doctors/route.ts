import { NextResponse } from 'next/server';
import { getClient } from '@/lib/apollo-client';
import { DOCTORS_BY_CLINIC_QUERY } from './doctors.gql';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const clinicId = searchParams.get('clinicId');
  
  const { data } = await getClient().query({ 
    query: DOCTORS_BY_CLINIC_QUERY,
    variables: { clinicId },
  });

  return NextResponse.json(data.doctorsByClinic);
}