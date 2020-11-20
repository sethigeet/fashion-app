import React from "react";

import { Linking } from "react-native";

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
import { TouchableOpacity } from "react-native-gesture-handler";

const initialForgotPasswordValues = {
    email: "",
};
const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("This field is required!"),
});

const ForgotPassword = ({
    navigation,
}: AuthNavigationProps<"ForgotPassword">) => {
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
    } = useFormik({
        initialValues: initialForgotPasswordValues,
        onSubmit: (values) => {
            console.log(values);
            navigation.navigate("PasswordChanged");
        },
        validationSchema: ForgotPasswordSchema,
    });

    return (
        <Container
            top
            bottom
            topCurve="none"
            bottomCurve="none"
            footer={
                <Footer
                    text="Know your password?"
                    actionText="Log In Here"
                    onPress={() => navigation.navigate("Login")}
                />
            }
            pattern={3}
        >
            <Box p="xl" flex={1} justifyContent="center">
                <Box mb="l">
                    <Text variant="title1" textAlign="center" mb="m">
                        Forgot Password?
                    </Text>
                    <Text textAlign="center">
                        Enter the email address associated with your account
                    </Text>
                </Box>
                <Box>
                    <TextInput
                        icon="mail"
                        placeholder="Enter your email"
                        autoCompleteType="email"
                        autoCapitalize="none"
                        returnKeyType="go"
                        returnKeyLabel="submit"
                        onSubmitEditing={() => handleSubmit()}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        error={errors.email}
                        touched={touched.email}
                    />
                </Box>
                <Button
                    variant="primary"
                    label="Reset password"
                    onPress={handleSubmit}
                    alignSelf="center"
                    marginVertical="l"
                />
                <Box alignSelf="center">
                    <TouchableOpacity
                        onPress={() =>
                            Linking.openURL("mailto:help@support.com")
                        }
                    >
                        <Text variant="buttonText">
                            <Text>Didn't work? </Text>
                            <Text color="primary">Try another way</Text>
                        </Text>
                    </TouchableOpacity>
                </Box>
            </Box>
        </Container>
    );
};

export default ForgotPassword;
