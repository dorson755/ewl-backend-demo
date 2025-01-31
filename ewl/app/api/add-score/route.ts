import { NextResponse } from 'next/server';
import db from '@/db';

export async function POST(request: Request) {
  const { name, score } = await request.json();

  try {
    const stmt = db.prepare('INSERT INTO scores (name, score) VALUES (?, ?)');
    stmt.run(name, score);
    return NextResponse.json({ message: 'Score added successfully!' });
  } catch (error) {
    console.error('Error adding score:', error);
    return NextResponse.json(
      { error: 'Failed to add score' },
      { status: 500 }
    );
  }
}