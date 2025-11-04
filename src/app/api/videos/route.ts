import { NextResponse } from 'next/server';
import data from './data.json';

export async function GET() {
  // Simulating a small delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Sometimes we throw an error on purpose (10%) – to test the UI
  if (Math.random() < 0.1) {
    return NextResponse.json(
      { message: 'Failed to fetch videos. Please try again.' },
      { status: 500 },
    );
  }

  return NextResponse.json(data);
}
