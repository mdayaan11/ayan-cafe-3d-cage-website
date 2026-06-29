import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    endpoint: '/api/hours',
    timestamp: new Date().toISOString(),
  });
}
