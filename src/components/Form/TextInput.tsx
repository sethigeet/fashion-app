import React, { forwardRef } from "react";
import {
    StyleSheet,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
} from "react-native";

import { Feather as Icon } from "@expo/vector-icons";

import Box from "../Box";

import { useTheme } from "../Theme";
import RoundedIcons from "../RoundedIcon";

interface Props extends RNTextInputProps {
    icon: string;
    touched?: boolean;
    error?: string;
}

const TextInput = forwardRef<RNTextInput, Props>(
    ({ icon, touched, error, ...props }: Props, ref) => {
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
                        style={{ fontFamily: "SFProDisplay-Regular" }}
                        {...props}
                        {...{ ref }}
                    />
                </Box>
                {touched && (
                    <Box mx="s">
                        <RoundedIcons
                            name={error ? "x" : "check"}
                            size={SIZE}
                            color="white"
                            backgroundColor={color}
                        />
                    </Box>
                )}
            </Box>
        );
    }
);

export default TextInput;
