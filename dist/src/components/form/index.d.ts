import React, { ReactNode } from 'react';
import { FormikConfig, FormikHelpers, FormikProps } from 'formik';
export type ASFormProps = FormikConfig<any> & {
    children: (formikProps: FormikProps<any>) => ReactNode;
    onSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void | Promise<any>;
    initialValues?: any;
    validationSchema?: any;
    testId?: string;
};
declare const ASForm: React.FC<ASFormProps>;
export default ASForm;
