import { z } from 'zod';

export const medFormSchema = z.object({
  height: z.string(),
  weight: z.string(),
  pressureStart: z.string(),
  pressureEnd: z.string(),
  oxygen: z.string(),
  pulse: z.string(),
  allergy: z.string(),
  sleepTime: z.string(),
  temperature: z.string(),
});
