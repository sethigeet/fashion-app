import React from "react";

import { Box, RoundedIcon, Text, Theme, useTheme } from "../../components";

import { RectButton } from "react-native-gesture-handler";

export interface Props {
    icon: string;
    label: string;
    screen: string;
    color: keyof Theme["colors"];
}

const DrawerItem = ({ icon, label, color, screen }: Props) => {
    const theme = useTheme();

    return (
        <RectButton
            onPress={() => {}}
            style={{ borderRadius: theme.borderRadii.m }}
        >
            <Box flexDirection="row" alignItems="center" p="m">
                <RoundedIcon
                    name={icon}
                    backgroundColor={color}
                    color="white"
                    size={36}
                    iconRatio={0.5}
                />
                <Text
                    variant="buttonText"
                    color="secondary"
                    fontSize={16}
                    ml="m"
                >
                    {label}
                </Text>
            </Box>
        </RectButton>
    );
};

export default DrawerItem;
