import { NextResponse } from 'next/server';
import { getClient } from '@/lib/apollo-client';
import { CLINIC_QUERY } from './clinics.gql';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const clinicId = searchParams.get('clinicId');
  
  const { data } = await getClient().query({ 
    query: CLINIC_QUERY,
    variables: { clinicId },
  });

  return NextResponse.json(data.clinic);
}