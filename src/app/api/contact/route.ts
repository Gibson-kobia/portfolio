import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Contact form submission:', body);

    // Simulate sending email
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ message: 'Success' });
  } catch {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
