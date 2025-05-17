import { z } from 'zod';

export const mainInfoFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  number: z.string(),
  email: z.string(),
  login: z.string(),
  address: z.string(),
  city: z.string(),
  birthday: z.date(),
  sex: z.boolean(),
  countryTitle: z.string(),
});
