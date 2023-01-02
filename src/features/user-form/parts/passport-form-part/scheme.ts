import { DatePrimitive } from './../../../../lib/validation/primitives';
import { z } from 'zod';

export type PassportScheme = z.infer<typeof PassportScheme>;
export const PassportScheme = z.object({
	series: z.string().min(6).max(6),
	dateOfIssue: DatePrimitive(),
	dateOfExpiry: DatePrimitive().optional(),
	issuedBy: z.string().min(6).max(6),
	UNZR: z.string().min(14).max(14)
});
