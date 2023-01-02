import { z } from 'zod';

import { everyWordStartFromUppercaseRegex, isCyrillicRegex } from '@lib/regex/constants';

export const nameValidationPrimitive = (
	message = 'Потрібно використати літери українського алфавіту'
) =>
	z.string().min(2).and(
		z.string().regex(isCyrillicRegex, {
			message
		})
	);

export const placeValidationPrimitive = (
	message = 'Повино починатися з великої літери'
) =>
	z
		.string()
		.regex(everyWordStartFromUppercaseRegex, {
			message
		})
		.min(2);

export const TINPrimitive = (message = 'Повино містити тільки цифри') =>
	z.string().regex(/\d/, { message }).min(10).max(10);

export const DatePrimitive = () => z.date().min(new Date(1900, 0, 1)).max(new Date());
