import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Box from "./Box";
import RoundedIconButton from "./RoundedIconButton";
import Text from "./Text";
import { Theme } from "./Theme";

interface Props {
    left: {
        icon: string;
        onPress: () => void;
    };
    title: string;
    right?: {
        icon: string;
        onPress: () => void;
    };
    iconBackground: keyof Theme["colors"];
    color: keyof Theme["colors"];
}

const Header = ({ left, title, right, iconBackground, color }: Props) => {
    const insets = useSafeAreaInsets();

    return (
        <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            px="m"
            style={{ marginTop: insets.top }}
        >
            <RoundedIconButton
                name={left.icon}
                size={44}
                iconRatio={0.5}
                color={color}
                backgroundColor={iconBackground}
                onPress={left.onPress}
            />
            <Text color={color} variant="header" textTransform="uppercase">
                {title}
            </Text>
            {right ? (
                <RoundedIconButton
                    name={right.icon}
                    size={44}
                    iconRatio={0.5}
                    color={color}
                    backgroundColor={iconBackground}
                    onPress={right.onPress}
                />
            ) : (
                <Box height={44} width={44} />
            )}
        </Box>
    );
};

Header.defaultProps = {
    color: "secondary",
    iconBackground: "background",
};

export default Header;
