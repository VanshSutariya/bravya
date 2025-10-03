import nodemailer from 'nodemailer';

export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  budget: string;
  timeline: string;
  summary: string;
  attachment?: {
    filename: string;
    content: Buffer;
    contentType: string;
  };
}

export async function sendContactEmail(payload: ContactPayload) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    console.warn('[contact] SMTP env vars missing. Email mocked.');
    return {
      success: true,
      mocked: true,
    } as const;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const attachments = payload.attachment
    ? [
        {
          filename: payload.attachment.filename,
          content: payload.attachment.content,
          contentType: payload.attachment.contentType,
        },
      ]
    : undefined;

  await transporter.sendMail({
    from: `Bravya Web Solutions <${SMTP_USER}>`,
    to: CONTACT_TO,
    replyTo: payload.email,
    subject: `New project inquiry from ${payload.name}`,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company ?? 'N/A'}\nBudget: ${payload.budget}\nTimeline: ${payload.timeline}\n\nProject Summary:\n${payload.summary}`,
    html: `
      <h2>New project inquiry</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Company:</strong> ${payload.company ?? 'N/A'}</p>
      <p><strong>Budget:</strong> ${payload.budget}</p>
      <p><strong>Timeline:</strong> ${payload.timeline}</p>
      <p><strong>Project summary:</strong></p>
      <p>${payload.summary.replace(/\n/g, '<br />')}</p>
    `,
    attachments,
  });

  return { success: true, mocked: false } as const;
}
