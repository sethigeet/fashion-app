import React from "react";

import {
    Box,
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

interface BaseDrawerItem {
    icon: string;
    label: string;
    color: keyof Theme["colors"];
}
interface ScreenDrawerItem extends BaseDrawerItem {
    screen: keyof HomeRoutes;
}
interface OnPressDrawerItem extends BaseDrawerItem {
    onPress: (navigation: ReturnType<typeof useNavigation>) => void;
}
export type Props = ScreenDrawerItem | OnPressDrawerItem;

const DrawerItem = ({ icon, label, color, ...props }: Props) => {
    const theme = useTheme();
    const focusedRoute = getFocusedRouteNameFromRoute(useRoute());
    const navigation = useNavigation();
    const isFocused = props.screen ? props.screen === focusedRoute : false;

    return (
        <RectButton
            onPress={() => {
                if (props.onPress) {
                    props.onPress(navigation);
                }
                if (props.screen) {
                    navigation.navigate(props.screen);
                }
            }}
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
