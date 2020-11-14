import React from "react";

import { SocialLogin } from "../components";
import {
    Box,
    Text,
    Container,
    Button,
    TextInput,
    Checkbox,
} from "../../components";

import { Formik } from "formik";
import * as Yup from "yup";

const Footer = () => (
    <>
        <SocialLogin />
        <Button
            variant="transparent"
            label=""
            onPress={() => {}}
            alignSelf="center"
        >
            <Box flexDirection="row" alignItems="center">
                <Text variant="buttonText" color="white">
                    Don't have an account
                </Text>
                <Text variant="buttonText" color="primary" ml="s">
                    Sign Up Here
                </Text>
            </Box>
        </Button>
    </>
);

const initialValues = { email: "", password: "", rememberMe: false };

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("This field is required!"),
    password: Yup.string().required("This field is required!"),
});

const Login = () => {
    return (
        <Container
            top
            bottom
            topCurve="left"
            bottomCurve="none"
            footer={<Footer />}
        >
            <Box p="xl">
                <Box mb="l">
                    <Text variant="title1" textAlign="center" mb="m">
                        Welcome Back
                    </Text>
                    <Text textAlign="center">
                        Use your credentials below and login to your account
                    </Text>
                </Box>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={LoginSchema}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                        setFieldValue,
                    }) => (
                        <>
                            <Box>
                                <TextInput
                                    icon="mail"
                                    placeholder="Enter your email"
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("email")}
                                    value={values.email}
                                    error={errors.email}
                                    touched={touched.email}
                                />
                            </Box>
                            <Box mt="m">
                                <TextInput
                                    icon="lock"
                                    placeholder="Enter your password"
                                    onChangeText={handleChange("password")}
                                    onBlur={handleBlur("password")}
                                    value={values.password}
                                    error={errors.password}
                                    touched={touched.password}
                                />
                            </Box>
                            <Box
                                flexDirection="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Checkbox
                                    label="Remember me"
                                    checked={values.rememberMe}
                                    onChange={() =>
                                        setFieldValue(
                                            "rememberMe",
                                            !values.rememberMe
                                        )
                                    }
                                />
                                <Button
                                    variant="transparent"
                                    onPress={() => {}}
                                >
                                    <Text variant="buttonText" color="primary">
                                        Forgot password?
                                    </Text>
                                </Button>
                            </Box>
                            <Button
                                variant="primary"
                                label="Log into your account"
                                onPress={handleSubmit}
                                alignSelf="center"
                                marginTop="l"
                            />
                        </>
                    )}
                </Formik>
            </Box>
        </Container>
    );
};

export default Login;
