import React from 'react';
import {ReactNode, StyleSheet, View} from 'react-native'
import {Formik, FormikHelpers, FormikProps} from 'formik';

type FormValidationProps = {
    children: ReactNode;
    onSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void | Promise<any>;
    initialValues?: any;
    validationSchema?: any;
}

const FormValidation: React.FC<FormValidationProps> = (props: FormValidationProps) => {
    const {children, onSubmit, initialValues, validationSchema} = props || {}

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(formikProps: FormikProps<typeof initialValues>) => {
                return (
                    <View>
                        {children(formikProps)}
                    </View>
                )
            }}
        </Formik>
    )
}

const styles = StyleSheet.create({});

export default FormValidation
