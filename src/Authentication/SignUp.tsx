import React, { useRef } from "react";

import { TextInput as RNTextInput } from "react-native";

import { Footer } from "./components";
import {
    Box,
    Text,
    Container,
    Button,
    TextInput,
    AuthNavigationProps,
} from "./../components";

import { useFormik } from "formik";
import * as Yup from "yup";

const initialSignUpValues = { email: "", password: "", confirmPassword: "" };
const SignUpSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("This field is required!"),
    password: Yup.string().required("This field is required!"),
    confirmPassword: Yup.string()
        .required("This field is required!")
        .equals([Yup.ref("password")], "Passwords must match!"),
});

const SignUp = ({ navigation }: AuthNavigationProps<"SignUp">) => {
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
    } = useFormik({
        initialValues: initialSignUpValues,
        onSubmit: (values) => console.log(values),
        validationSchema: SignUpSchema,
    });
    const passwordInput = useRef<RNTextInput>(null);
    const confirmPasswordInput = useRef<RNTextInput>(null);

    return (
        <Container
            top
            bottom
            topCurve="right"
            bottomCurve="none"
            footer={
                <Footer
                    text="Already have an account?"
                    actionText="Log In Here"
                    onPress={() => navigation.navigate("Login")}
                />
            }
            pattern={2}
        >
            <Box p="xl" flex={1} justifyContent="center">
                <Box mb="l">
                    <Text variant="title1" textAlign="center" mb="m">
                        Create account
                    </Text>
                    <Text textAlign="center">
                        Let's know what your email and password is!
                    </Text>
                </Box>
                <Box>
                    <TextInput
                        icon="mail"
                        placeholder="Enter your email"
                        autoCompleteType="email"
                        autoCapitalize="none"
                        returnKeyType="next"
                        returnKeyLabel="next"
                        onSubmitEditing={() => passwordInput.current?.focus()}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        error={errors.email}
                        touched={touched.email}
                    />
                </Box>
                <Box mt="m">
                    <TextInput
                        ref={passwordInput}
                        icon="lock"
                        placeholder="Enter your password"
                        secureTextEntry
                        autoCompleteType="password"
                        autoCorrect={false}
                        autoCapitalize="none"
                        returnKeyType="next"
                        returnKeyLabel="next"
                        onSubmitEditing={() =>
                            confirmPasswordInput.current?.focus()
                        }
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        error={errors.password}
                        touched={touched.password}
                    />
                </Box>
                <Box mt="m">
                    <TextInput
                        ref={confirmPasswordInput}
                        icon="lock"
                        placeholder="Confirm your password"
                        secureTextEntry
                        autoCompleteType="password"
                        autoCorrect={false}
                        autoCapitalize="none"
                        returnKeyType="go"
                        returnKeyLabel="submit"
                        onSubmitEditing={() => handleSubmit()}
                        onChangeText={handleChange("confirmPassword")}
                        onBlur={handleBlur("confirmPassword")}
                        value={values.confirmPassword}
                        error={errors.confirmPassword}
                        touched={touched.confirmPassword}
                    />
                </Box>
                <Button
                    variant="primary"
                    label="Create your account"
                    onPress={handleSubmit}
                    alignSelf="center"
                    marginTop="l"
                />
            </Box>
        </Container>
    );
};

export default SignUp;
