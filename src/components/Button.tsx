import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { useTheme } from "@shopify/restyle";
import { Theme } from "./Theme";

import Text from "./Text";

interface Props {
    variant: "default" | "primary";
    label: string;
    onPress: () => void;
}

const Button = ({ variant, label, onPress }: Props) => {
    const { colors } = useTheme<Theme>();
    const backgroundColor =
        variant === "primary" ? colors.primary : colors.grey;
    const color = variant === "primary" ? colors.white : colors.text;

    return (
        <RectButton
            style={[styles.container, { backgroundColor }]}
            {...{ onPress }}
        >
            <Text variant="buttonText" style={{ color }}>
                {label}
            </Text>
        </RectButton>
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
