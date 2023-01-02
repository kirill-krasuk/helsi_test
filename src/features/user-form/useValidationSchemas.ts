import { useState, useEffect } from 'react';
import { z } from 'zod';

import { mergeValidationScheme } from '@lib/validation';
import { truthy } from '@lib/boolean';

export function useValidationSchemas<T extends z.ZodRawShape>(
	baseScheme: z.ZodObject<T>,
	optionalSchemas: z.ZodObject<any>[],
	deps: any[] = []
) {
	const [scheme, setScheme] = useState(() =>
		mergeValidationScheme(baseScheme, optionalSchemas)
	);

	const [dynamic, setDynamic] = useState<z.ZodObject<any> | null>(null);

	// get dynamic part of validations for merge with base scheme and optional schemas
	const mergeDynamicSchemes = <T extends z.ZodRawShape>(scheme: z.ZodObject<T>) => {
		setDynamic(scheme);
	};

	const updateSchemas = () => {
		setScheme(
			mergeValidationScheme(
				baseScheme,
				[dynamic, ...optionalSchemas].filter(truthy)
			)
		);
	};

	useEffect(() => {
		updateSchemas();
	}, [...deps, dynamic]);

	return { scheme, mergeDynamicSchemes };
}
