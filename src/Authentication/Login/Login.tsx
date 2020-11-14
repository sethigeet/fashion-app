import React from "react";
import { StyleSheet } from "react-native";

import { SocialLogin } from "../components";
import { Box, Text, Container, Button } from "../../components";

const Login = () => {
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

    return (
        <Container
            top
            bottom
            topCurve="left"
            bottomCurve="none"
            footer={<Footer />}
        >
            <Box>
                <Text variant="title1" textAlign="center">
                    dasdsad
                </Text>
            </Box>
        </Container>
    );
};

export default Login;

const styles = StyleSheet.create({});
