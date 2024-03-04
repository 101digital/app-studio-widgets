"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateValidationSchema = void 0;
const generateValidationSchema = (validationSchema) => {
    if (!validationSchema) {
        return '';
    }
    const fieldValidations = [];
    validationSchema.forEach((field) => {
        const fieldName = Object.keys(field)[0];
        const validations = field[fieldName];
        const existingFieldIndex = fieldValidations.findIndex((value) => value.includes(`${fieldName}:`));
        const fieldValidation = validations.map((validation) => {
            const validationKey = Object.keys(validation)[0];
            const validationValue = Array.isArray(validation[validationKey])
                ? `${validationKey}('${validation[validationKey].join(', ')}')`
                : `${validationKey}('${validation[validationKey]}')`;
            return `${validationValue}`;
        }).join('.');
        if (existingFieldIndex !== -1) {
            // Field already exists in fieldValidations, replace the existing entry
            fieldValidations[existingFieldIndex] = `  ${fieldName}: Yup.string().trim().${fieldValidation}`;
        }
        else {
            // Field doesn't exist, add it to fieldValidations
            fieldValidations.push(`  ${fieldName}: Yup.string().trim().${fieldValidation}`);
        }
    });
    return `{Yup.object().shape({\n${fieldValidations.join(',\n')}\n})}`;
};
exports.generateValidationSchema = generateValidationSchema;
