import { Buffer } from 'node:buffer';
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please tell us who we will speak with.'),
  email: z.string().email('Enter a valid email so we can reply.'),
  company: z.string().optional(),
  budget: z.string().min(1, 'Select a budget range.'),
  timeline: z.string().min(1, 'Select a timeline.'),
  summary: z.string().min(20, 'Share at least a few sentences about the project.'),
  attachment: z
    .object({
      filename: z.string(),
      content: z.instanceof(Buffer),
      contentType: z.string(),
    })
    .optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
