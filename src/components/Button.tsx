import React from "react";
import { StyleSheet, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { spacing, SpacingProps, useRestyle, useTheme } from "@shopify/restyle";
import { Theme } from "./Theme";

import Text from "./Text";

const restyleFunctions = [spacing];
type Props = SpacingProps<Theme> & {
    variant: "default" | "primary" | "transparent";
    label: string;
    onPress: () => void;
};

const Button = ({ variant, label, onPress, ...rest }: Props) => {
    const props = useRestyle(restyleFunctions, rest);
    const { colors } = useTheme<Theme>();
    const backgroundColor =
        variant === "primary"
            ? colors.primary
            : variant === "default"
            ? colors.grey
            : "transparent";
    const color = variant === "primary" ? colors.white : colors.buttonText;

    return (
        <View {...props}>
            <RectButton
                style={[styles.container, { backgroundColor }]}
                {...{ onPress }}
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
