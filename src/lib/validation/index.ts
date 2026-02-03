import { z } from 'zod';

export const NewsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export type NewsletterFormData = z.infer<typeof NewsletterSchema>;

export const BespokeRequestSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  room: z.string().min(2, 'Please specify the room'),
  dimensions: z.string().optional(),
  materials: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type BespokeRequestFormData = z.infer<typeof BespokeRequestSchema>;

export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export const EnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SITE_NAME: z.string().optional(),
});

export type Env = z.infer<typeof EnvSchema>;

