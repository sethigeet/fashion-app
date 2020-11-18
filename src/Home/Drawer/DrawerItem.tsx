import React from "react";

import {
    Box,
    HomeNavigationProps,
    HomeRoutes,
    RoundedIcon,
    Text,
    Theme,
    useTheme,
} from "../../components";

import { RectButton } from "react-native-gesture-handler";
import {
    getFocusedRouteNameFromRoute,
    useNavigation,
    useRoute,
} from "@react-navigation/native";

export interface Props {
    icon: string;
    label: string;
    screen: keyof HomeRoutes;
    color: keyof Theme["colors"];
}

const DrawerItem = ({ icon, label, color, screen }: Props) => {
    const theme = useTheme();
    const focusedRoute = getFocusedRouteNameFromRoute(useRoute());
    const navigation = useNavigation();
    const isFocused = screen === focusedRoute;

    return (
        <RectButton
            onPress={() => navigation.navigate(screen)}
            style={{
                borderRadius: theme.borderRadii.m,
                backgroundColor: isFocused
                    ? theme.colors.primaryLight
                    : theme.colors.white,
            }}
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
