import React, { useRef, useState } from "react";
import { ScrollView, TextInput as RNTextInput } from "react-native";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Box, Button, Text, TextInput, useTheme } from "../../components";
import CheckboxGroup from "./CheckboxGroup";

const initialSignUpValues = { name: "", email: "", password: "" };
const SignUpSchema = Yup.object().shape({
    name: Yup.string().min(4),
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("This field is required!"),
    password: Yup.string().required("This field is required!"),
});

const PersonalInfo = () => {
    const theme = useTheme();
    const genders = [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
    ];
    const [containerWidth, setContainerWidth] = useState(0);

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
    const emailInput = useRef<RNTextInput>(null);
    const passwordInput = useRef<RNTextInput>(null);

    return (
        <ScrollView style={{ marginTop: 10 }}>
            <Box
                px="m"
                onLayout={({
                    nativeEvent: {
                        layout: { width },
                    },
                }) => setContainerWidth(width)}
            >
                <Box>
                    <Text variant="placeholder" ml="s" mb="s">
                        Account Information
                    </Text>
                    <Box>
                        <TextInput
                            icon="user"
                            placeholder="Enter your name"
                            autoCompleteType="name"
                            autoCapitalize="words"
                            returnKeyType="next"
                            returnKeyLabel="next"
                            onSubmitEditing={() => emailInput.current?.focus()}
                            onChangeText={handleChange("name")}
                            onBlur={handleBlur("name")}
                            value={values.name}
                            error={errors.name}
                            touched={touched.name}
                        />
                    </Box>
                    <Box mt="m">
                        <TextInput
                            ref={emailInput}
                            icon="mail"
                            placeholder="Enter your email"
                            autoCompleteType="email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            returnKeyType="next"
                            returnKeyLabel="next"
                            onSubmitEditing={() =>
                                passwordInput.current?.focus()
                            }
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
                    <Box mt="m">
                        <CheckboxGroup
                            options={genders}
                            radio
                            width={containerWidth / 2 - theme.spacing.m * 2}
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
            </Box>
        </ScrollView>
    );
};

export default PersonalInfo;
