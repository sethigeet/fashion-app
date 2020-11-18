import React from "react";
import { Dimensions, StyleSheet } from "react-native";

import {
    DrawerContentComponentProps,
    DrawerContentOptions,
} from "@react-navigation/drawer";

import { Box, Header, Text } from "../../components";

import DrawerItem, { Props as DrawerItemProps } from "./DrawerItem";
import { CommonActions } from "@react-navigation/native";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;

const items: DrawerItemProps[] = [
    {
        icon: "zap",
        label: "Outfit Ideas",
        screen: "OutfitIdeas",
        color: "primary",
    },
    {
        icon: "heart",
        label: "Favourite Outfits",
        screen: "FavouriteOutfits",
        color: "orange",
    },
    {
        icon: "user",
        label: "Edit Profile",
        screen: "EditProfile",
        color: "yellow",
    },
    {
        icon: "clock",
        label: "Transaction History",
        screen: "TransactionHistory",
        color: "pink",
    },
    {
        icon: "settings",
        label: "Notifications Settings",
        screen: "NotificationsSettings",
        color: "violet",
    },
    {
        icon: "log-out",
        label: "Logout",
        onPress: (navigation) =>
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: "Authentication" }],
                })
            ),
        color: "secondary",
    },
];

const DrawerContent = ({
    navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
        <Box flex={1}>
            <Box flex={0.2} bg="white">
                <Box
                    style={StyleSheet.absoluteFillObject}
                    borderBottomRightRadius="xl"
                    bg="secondary"
                >
                    <Header
                        left={{
                            icon: "x",
                            onPress: () => navigation.closeDrawer(),
                        }}
                        right={{ icon: "shopping-bag", onPress: () => {} }}
                        title="Menu"
                        iconBackground="secondary"
                        color="white"
                    />
                </Box>
            </Box>
            <Box flex={0.7}>
                <Box bg="secondary" flex={1} />
                <Box bg="primary" flex={1} />
                <Box
                    style={StyleSheet.absoluteFillObject}
                    borderTopLeftRadius="xl"
                    borderBottomRightRadius="xl"
                    bg="white"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        position="absolute"
                        left={(DRAWER_WIDTH - 100) / 2}
                        right={0}
                        top={-50}
                        bg="primary"
                        height={100}
                        width={100}
                        style={{ borderRadius: 50 }}
                        alignSelf="center"
                    />
                    <Box style={{ marginTop: 50 }}>
                        <Text variant="title1" textAlign="center">
                            Mike Peter
                        </Text>
                        <Text variant="body" textAlign="center">
                            mike@flexinstudios.com
                        </Text>
                    </Box>
                    <Box>
                        {items.map((item, index) => (
                            <DrawerItem key={index} {...item} />
                        ))}
                    </Box>
                </Box>
            </Box>
            <Box flex={0.1}>
                <Box
                    style={StyleSheet.absoluteFillObject}
                    borderTopLeftRadius="xl"
                    bg="primary"
                />
            </Box>
        </Box>
    );
};

export default DrawerContent;
