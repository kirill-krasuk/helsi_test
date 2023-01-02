import * as z from 'zod';

function formatErrors(errors: z.ZodError) {
	const _errors = errors.format();

	return Object.keys(_errors).reduce((obj, key) => {
		// ignore private keys like _errors
		if (key.startsWith('_')) {
			return obj;
		}

		// @ts-ignore
		obj[key] = _errors[key]._errors[0];
		return obj;
	}, {});
}

// zod to final-form adapter
export function validate<T>(scheme: z.ZodSchema<T>) {
	return (data: T) => {
		const validatedData = scheme.safeParse(data);

		if (!validatedData.success) {
			const { error } = validatedData;

			return formatErrors(error);
		}
	};
}
