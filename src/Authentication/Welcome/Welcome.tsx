import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
    Box,
    Button,
    Routes,
    StackNavigationProps,
    Text,
    useTheme,
} from "../../components";

const { width } = Dimensions.get("window");

const picture = {
    src: require("../assets/1.png"),
    width: 409,
    height: 958,
};

export const assets = [picture.src];

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
    const theme = useTheme();

    return (
        <Box flex={1} bg="white">
            <Box
                flex={1}
                borderBottomRightRadius="xl"
                backgroundColor="grey"
                alignItems="center"
                justifyContent="flex-end"
            >
                <Image
                    source={picture.src}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        width: width - theme.borderRadii.xl,
                        height:
                            (width - theme.borderRadii.xl) *
                            (picture.height / picture.width),
                    }}
                />
            </Box>
            <Box flex={1} borderTopLeftRadius="xl">
                <Box
                    bg="grey"
                    position="absolute"
                    top={0}
                    right={0}
                    bottom={0}
                    left={0}
                />
                <Box
                    bg="white"
                    borderTopLeftRadius="xl"
                    flex={1}
                    justifyContent="space-evenly"
                    alignItems="center"
                    p="xl"
                >
                    <Text variant="title2" textAlign="center">
                        Let's Get Started
                    </Text>
                    <Text variant="body" textAlign="center" mb="m">
                        Login to your account below or signup for an amazing
                        experience
                    </Text>
                    <Button
                        variant="primary"
                        label="Have an account? Login"
                        onPress={() => navigation.navigate("Login")}
                        marginBottom="s"
                    />
                    <Button
                        variant="default"
                        label="Join us, it's Free"
                        onPress={() => navigation.navigate("SignUp")}
                        marginBottom="s"
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ForgotPassword")}
                    >
                        <Text variant="buttonText">Forgot Password?</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
        </Box>
    );
};

export default Welcome;
