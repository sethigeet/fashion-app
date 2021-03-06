import React from "react";
import { StyleSheet, View } from "react-native";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";

import {
    spacing,
    SpacingProps,
    useRestyle,
    layout,
    LayoutProps,
} from "@shopify/restyle";
import { useTheme, Theme } from "./Theme";

import Text from "./Text";

const restyleFunctions = [spacing, layout];
type Props = SpacingProps<Theme> &
    LayoutProps<Theme> & {
        variant: "default" | "primary";
        label?: string;
        onPress: () => void;
        style?: RectButtonProperties["style"];
    };

const Button = ({ variant, label, onPress, style, ...rest }: Props) => {
    const props = useRestyle(restyleFunctions, rest);
    const { colors } = useTheme();
    const backgroundColor =
        variant === "primary" ? colors.primary : colors.background2;
    const color = variant === "primary" ? colors.background : colors.secondary;

    return (
        <View {...props}>
            <RectButton
                style={[styles.container, { backgroundColor }, style]}
                onPress={onPress}
            >
                <Text variant="buttonText" style={{ color }}>
                    {label}
                </Text>
            </RectButton>
        </View>
    );
};

Button.defaultProps = { variant: "default" };

export default Button;

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        fontFamily: "SFProText-Regular",
        fontSize: 15,
        textAlign: "center",
    },
});
