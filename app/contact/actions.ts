'use server';

import { Buffer } from 'node:buffer';

import { contactSchema } from '@/lib/validation';
import type { ContactFormValues } from '@/lib/validation';
import { POST as contactHandler } from '@/app/api/contact/route';

export interface ContactActionState {
  status: 'idle' | 'success' | 'error';
  message?: string;
  errors: Partial<Record<keyof ContactFormValues | 'attachment', string>>;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function submitContactForm(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const attachmentFile = formData.get('attachment');
  let attachment:
    | {
      filename: string;
      content: Buffer;
      contentType: string;
    }
    | undefined;
  if (attachmentFile instanceof File && attachmentFile.size > 0) {
    if (attachmentFile.size > MAX_FILE_SIZE) {
      return {
        status: 'error',
        message: 'Attachment must be under 5MB.',
        errors: { attachment: 'Attachment must be under 5MB.' },
      };
    }
    const arrayBuffer = await attachmentFile.arrayBuffer();
    attachment = {
      filename: attachmentFile.name,
      content: Buffer.from(arrayBuffer),
      contentType: attachmentFile.type || 'application/octet-stream',
    };
  }

  const name = formData.get('name');
  const email = formData.get('email');
  const company = formData.get('company');
  const budget = formData.get('budget');
  const timeline = formData.get('timeline');
  const summary = formData.get('summary');

  const candidate = {
    name: typeof name === 'string' ? name : '',
    email: typeof email === 'string' ? email : '',
    company: typeof company === 'string' ? company : '',
    budget: typeof budget === 'string' ? budget : '',
    timeline: typeof timeline === 'string' ? timeline : '',
    summary: typeof summary === 'string' ? summary : '',
    attachment,
  };

  const parsed = contactSchema.safeParse({
    ...candidate,
    company: candidate.company || undefined,
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      status: 'error',
      message: 'Please fix the highlighted fields.',
      errors: Object.fromEntries(
        Object.entries(fieldErrors).map(([key, value]) => [key, value?.[0] ?? 'Invalid value']),
      ) as ContactActionState['errors'],
    };
  }

  const payload = {
    ...parsed.data,
    attachment: parsed.data.attachment
      ? {
        filename: parsed.data.attachment.filename,
        content: parsed.data.attachment.content.toString('base64'),
        contentType: parsed.data.attachment.contentType,
      }
      : undefined,
  };

  try {
    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const response = await contactHandler(request);
    const data = (await response.json()) as {
      message?: string;
      errors?: Record<string, string[] | undefined>;
    };

    if (!response.ok) {
      const normalizedErrors = data.errors
        ? (Object.fromEntries(
            Object.entries(data.errors).map(([key, messages]) => [
              key,
              messages?.[0] ?? 'Invalid value',
            ]),
          ) as ContactActionState['errors'])
        : {};

      return {
        status: 'error',
        message: data.message ?? 'We could not send your message. Try again shortly.',
        errors: normalizedErrors,
      };
    }

    return {
      status: 'success',
      message: data.message ?? 'Thanks! We will be in touch soon.',
      errors: {},
    };
  } catch (error: unknown) {
    console.error('[contact] server action failed', error);
    return {
      status: 'error',
      message: 'We hit a snag sending your message. Please retry.',
      errors: {},
    };
  }
}
