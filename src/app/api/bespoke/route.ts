import { NextRequest, NextResponse } from 'next/server';
import { BespokeRequestSchema } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = BespokeRequestSchema.parse(body);

    // In a real app, save to database or send email
    console.log('Bespoke request:', validatedData);

    return NextResponse.json(
      { message: 'Thank you! We will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid form data', details: error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

