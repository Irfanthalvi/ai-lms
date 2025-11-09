import * as z from 'zod';

export const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  businessEmail: z.string().email('Invalid email'),
  contactNumber: z.string().min(1, 'Contact number is required'),
  industry: z.string().min(1, 'Industry is required'),
  companyName: z.string().min(1, 'Company name is required'),
  message: z.string().min(1, 'Message is required'),
  agree: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the Privacy Policy',
  }),
});
