import React, {ReactNode} from 'react';
import {View} from 'react-native'
import {Formik, FormikConfig, FormikHelpers, FormikProps} from 'formik';

export type ASFormProps = FormikConfig<any> & {
    children: (formikProps: FormikProps<any>) => ReactNode;
    onSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void | Promise<any>;
    initialValues?: any;
    validationSchema?: any;
}

const ASForm: React.FC<ASFormProps> = (props: ASFormProps) => {
    const {children, onSubmit, initialValues, validationSchema, ...restProps} = props || {}

    return (
        <Formik
            {...restProps}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(formikProps: FormikProps<typeof initialValues | any>) => {
                return (
                    <>
                        {children?.(formikProps)}
                    </>
                )
            }}
        </Formik>
    )
}


export default ASForm
