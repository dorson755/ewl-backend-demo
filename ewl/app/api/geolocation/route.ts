import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || '0.0.0.0';
  
  try {
    const response = await axios.get(`https://ipapi.co/json/`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching geolocation:', error);
    return NextResponse.json(
      { error: 'Failed to fetch geolocation data' },
      { status: 500 }
    );
  }
}