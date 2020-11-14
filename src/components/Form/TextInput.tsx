import React from "react";
import {
    StyleSheet,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
} from "react-native";

import { Feather as Icon } from "@expo/vector-icons";

import Box from "../Box";

import { useTheme } from "../Theme";

interface Props extends RNTextInputProps {
    icon: string;
    touched?: boolean;
    error?: string;
}

const TextInput = ({ icon, touched, error, ...props }: Props) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2;

    const color: keyof typeof theme.colors = !touched
        ? "text"
        : error
        ? "danger"
        : "primary";

    return (
        <Box
            flexDirection="row"
            height={48}
            borderRadius="s"
            borderWidth={StyleSheet.hairlineWidth}
            borderColor={color}
            alignItems="center"
        >
            <Box p="s">
                <Icon
                    name={icon}
                    size={theme.spacing.m}
                    color={theme.colors[color]}
                />
            </Box>
            <Box flex={1}>
                <RNTextInput
                    underlineColorAndroid="transparent"
                    placeholderTextColor={theme.colors.placeholder}
                    {...props}
                />
            </Box>
            {touched && (
                <Box
                    height={SIZE}
                    width={SIZE}
                    borderRadius="m"
                    bg={color}
                    mx="s"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Icon
                        name={error ? "x" : "check"}
                        color="white"
                        size={theme.spacing.m}
                    />
                </Box>
            )}
        </Box>
    );
};

export default TextInput;
