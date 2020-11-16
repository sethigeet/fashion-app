import React from "react";

import {
    Box,
    Text,
    Container,
    Button,
    Routes,
    StackNavigationProps,
    RoundedIcon,
    RoundedIconButton,
} from "./../components";

const PasswordChanged = ({
    navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
    const SIZE = 80;

    return (
        <Container
            top
            bottom
            topCurve="left"
            bottomCurve="none"
            footer={
                <Box alignSelf="center" p="m">
                    <RoundedIconButton
                        name="x"
                        color="secondary"
                        backgroundColor="white"
                        size={60}
                        iconRatio={0.6}
                        onPress={() => navigation.navigate("Login")}
                    />
                </Box>
            }
        >
            <Box p="xl" flex={1} justifyContent="center">
                <Box mb="l">
                    <Box mb="m" alignSelf="center">
                        <RoundedIcon
                            name="check"
                            size={SIZE}
                            color="primary"
                            backgroundColor="primaryLight"
                            iconRatio={0.6}
                        />
                    </Box>
                    <Text variant="title1" textAlign="center" mb="m">
                        Your password was successfully changed
                    </Text>
                    <Text textAlign="center">
                        Close this window and login again
                    </Text>
                </Box>
                <Button
                    variant="primary"
                    label="Log into your account"
                    onPress={() => navigation.navigate("Login")}
                    alignSelf="center"
                    marginVertical="l"
                />
            </Box>
        </Container>
    );
};

export default PasswordChanged;
