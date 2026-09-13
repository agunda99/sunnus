import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  message: z.string().min(8),
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const body = req.body || {};

  if (body.website) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  const result = ContactSchema.safeParse(body);
  if (!result.success) {
    return res.status(400).json({ error: 'Invalid payload', issues: result.error.flatten() });
  }

  return res.status(200).json({ ok: true, received: true, ip });
}
