import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { phone, message } = await request.json();

  // Simulate a successful response
  const simulatedResponse = {
    status: 'success',
    message: 'Notification sent successfully (simulated).',
    data: {
      template_name: 'notification',
      phone: phone,
      message: message,
    },
  };

  return NextResponse.json(simulatedResponse);
}