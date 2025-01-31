import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || '0.0.0.0';
  const response = await axios.get(`https://ipapi.co/${ip}/json/`);
  return NextResponse.json(response.data);
}