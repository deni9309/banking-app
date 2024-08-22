import * as z from 'zod'

export const PaymentFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(4, 'Transfer note is too short'),
  amount: z.string().min(4, 'Amount is too short'),
  senderBank: z.string().min(4, 'Please select a valid bank account'),
  sharableId: z.string().min(8, 'Please select a valid sharable Id'),
})
