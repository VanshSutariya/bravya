import { Buffer } from 'node:buffer';
import { NextResponse } from 'next/server';

import { sendContactEmail } from '@/lib/email';
import { contactSchema } from '@/lib/validation';

export async function POST(request: Request) {
  const body = await request.json();

  const attachment = body.attachment
    ? {
      filename: body.attachment.filename as string,
      content: Buffer.from(body.attachment.content as string, 'base64'),
      contentType: body.attachment.contentType as string,
    }
    : undefined;

  const parsed = contactSchema.safeParse({
    name: body.name,
    email: body.email,
    company: body.company,
    budget: body.budget,
    timeline: body.timeline,
    summary: body.summary,
    attachment,
  });

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    return NextResponse.json({ message: 'Validation failed', errors }, { status: 400 });
  }

  try {
    const result = await sendContactEmail(parsed.data);
    // return NextResponse.json({
    //   message: result.mocked
    //     ? 'Message received. SMTP not configured—email logged for development.'
    //     : 'Thanks! We will be in touch within two business days.',
    // });

    return NextResponse.json({
      message: 'Thanks! We will be in touch within two business days.',
    });
  } catch (error) {
    console.error('[contact] Failed to send email', error);
    return NextResponse.json(
      { message: 'We could not send your message. Please try again shortly.' },
      { status: 500 },
    );
  }
}
