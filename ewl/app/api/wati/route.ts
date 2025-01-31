import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  const { phone, message } = await request.json();

  const response = await axios.post(
    'https://api.wati.io/v1/sendTemplateMessage',
    {
      template_name: 'notification',
      broadcast_name: 'Demo Notification',
      parameters: [{ name: 'message', value: message }],
      phone: phone,
    },
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxN2I3MDU3Ni0yZTFiLTQ4Y2MtODg3OC1mMmZlMTRmZTEyZDIiLCJ1bmlxdWVfbmFtZSI6ImR3aTMyMDlAd2d1LmVkdSIsIm5hbWVpZCI6ImR3aTMyMDlAd2d1LmVkdSIsImVtYWlsIjoiZHdpMzIwOUB3Z3UuZWR1IiwiYXV0aF90aW1lIjoiMDEvMzEvMjAyNSAwNTowMjo1NyIsImRiX25hbWUiOiJ3YXRpX2FwcF90cmlhbCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlRSSUFMIiwiZXhwIjoxNzM4OTcyODAwLCJpc3MiOiJDbGFyZV9BSSIsImF1ZCI6IkNsYXJlX0FJIn0.vYKKH9a5ihKtnL7uYlmUjdUeELrLtvmj_-LkCJUySB4`,
      },
    }
  );

  return NextResponse.json(response.data);
}