import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Box from "./Box";
import RoundedIconButton from "./RoundedIconButton";
import Text from "./Text";

interface Props {
    left: {
        icon: string;
        onPress: () => void;
    };
    title: string;
    right: {
        icon: string;
        onPress: () => void;
    };
}

const Header = ({ left, title, right }: Props) => {
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
                size={24}
                color="white"
                backgroundColor="secondary"
                onPress={left.onPress}
            />
            <Text color="white" variant="header" textTransform="uppercase">
                {title}
            </Text>
            <RoundedIconButton
                name={right.icon}
                size={24}
                color="white"
                backgroundColor="secondary"
                onPress={right.onPress}
            />
        </Box>
    );
};

export default Header;
