import { NextResponse } from 'next/server';
import db from '@/db';

export async function GET() {
  try {
    const topScores = db
      .prepare('SELECT name, score FROM scores ORDER BY score DESC LIMIT 5')
      .all();
    return NextResponse.json(topScores);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leaderboard' },
      { status: 500 }
    );
  }
}