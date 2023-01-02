export const isCyrillicRegex = /^[А-Яа-яЁёЇїІіЄєҐґ']+$/;
export const isCapitalizeCyrillicRegex = /^[А-ЯЁЇІЄҐ][А-Яа-яЁёЇїІіЄєҐґ]+$/;
export const everyWordStartFromUppercaseRegex =
	/^[А-ЯЁЇІЄҐ][А-Яа-яЁёЇїІіЄєҐґ]+(\s[А-ЯЁЇІЄҐ][А-Яа-яЁёЇїІіЄєҐґ]+)*$/;
export const phoneRegex = /^\+380\d{9}$/;
