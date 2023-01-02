import { z } from 'zod';

export type IDPassportScheme = z.infer<typeof IDPassportScheme>;
export const IDPassportScheme = z.object({
	id: z.string().min(6).max(6)
});
