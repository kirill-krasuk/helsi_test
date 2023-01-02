import { z } from 'zod';

import { phoneRegex } from '@lib/regex/constants';
import {
	nameValidationPrimitive,
	TINPrimitive,
	placeValidationPrimitive,
	DatePrimitive
} from '@lib/validation/primitives';

export type UserBaseScheme = z.infer<typeof UserBaseScheme>;
export const UserBaseScheme = z.object({
	firstName: nameValidationPrimitive(),
	lastName: nameValidationPrimitive(),
	birthDate: DatePrimitive(),
	sex: z.enum(['male', 'female']),
	country: placeValidationPrimitive(),
	city: placeValidationPrimitive(),
	secretWord: z.string().min(6, { message: 'Повино бути не менше 6 символів' }),
	methodOfCommunication: z.enum(['email', 'phone']),
	phoneNumber: z.string().regex(phoneRegex, { message: 'Невірний номер телефона' }),
	email: z.string().email()
});

export type PatronymicScheme = z.infer<typeof PatronymicScheme>;
export const PatronymicScheme = z.object({
	patronymic: nameValidationPrimitive()
});

export type PatronymicOptionalScheme = z.infer<typeof PatronymicOptionalScheme>;
export const PatronymicOptionalScheme = z.object({
	patronymic: nameValidationPrimitive().optional()
});

export type TINScheme = z.infer<typeof TINScheme>;
export const TINScheme = z.object({
	TIN: TINPrimitive()
});

export type TINOptionalScheme = z.infer<typeof TINOptionalScheme>;
export const TINOptionalScheme = z.object({
	TIN: TINPrimitive().optional()
});

export type UserFormValues = UserBaseScheme &
	PatronymicOptionalScheme &
	TINOptionalScheme;
