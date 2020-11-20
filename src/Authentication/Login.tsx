import React, { useRef } from "react";

import { TextInput as RNTextInput } from "react-native";

import { Footer } from "./components";
import {
    Box,
    Text,
    Container,
    Button,
    TextInput,
    Checkbox,
    AuthNavigationProps,
} from "./../components";

import { useFormik } from "formik";
import * as Yup from "yup";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CommonActions } from "@react-navigation/native";

const initialLoginValues = { email: "", password: "", rememberMe: false };
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("This field is required!"),
    password: Yup.string().required("This field is required!"),
});

const Login = ({ navigation }: AuthNavigationProps<"Login">) => {
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
    } = useFormik({
        initialValues: initialLoginValues,
        onSubmit: () =>
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: "Home" }],
                })
            ),
        validationSchema: LoginSchema,
    });
    const passwordInput = useRef<RNTextInput>(null);

    return (
        <Container
            top
            bottom
            topCurve="left"
            bottomCurve="none"
            footer={
                <Footer
                    text="Don't have an account?"
                    actionText="Sign Up Here"
                    onPress={() => navigation.navigate("SignUp")}
                />
            }
            pattern={1}
        >
            <Box p="xl" flex={1} justifyContent="center">
                <Box mb="l">
                    <Text variant="title1" textAlign="center" mb="m">
                        Welcome Back
                    </Text>
                    <Text textAlign="center">
                        Use your credentials below and login to your account
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
                        returnKeyType="go"
                        returnKeyLabel="submit"
                        onSubmitEditing={() => handleSubmit()}
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
                    mt="s"
                >
                    <Checkbox
                        label="Remember me"
                        checked={values.rememberMe}
                        onChange={() =>
                            setFieldValue("rememberMe", !values.rememberMe)
                        }
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ForgotPassword")}
                    >
                        <Text variant="buttonText" color="primary">
                            Forgot password?
                        </Text>
                    </TouchableOpacity>
                </Box>
                <Button
                    variant="primary"
                    label="Log into your account"
                    onPress={handleSubmit}
                    alignSelf="center"
                    marginTop="l"
                />
            </Box>
        </Container>
    );
};

export default Login;
