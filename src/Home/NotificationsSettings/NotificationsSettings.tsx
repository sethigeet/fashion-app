import React from "react";
import { StyleSheet } from "react-native";

import { Box, Header, HomeNavigationProps, Content } from "../../components";

import Setting from "./Setting";

const NotificationsSettings = ({
    navigation,
}: HomeNavigationProps<"NotificationsSettings">) => {
    return (
        <Content>
            <Header
                left={{
                    icon: "menu",
                    onPress: () => navigation.openDrawer(),
                }}
                right={{
                    icon: "shopping-bag",
                    onPress: () => navigation.navigate("Cart"),
                }}
                title="Notifications Settings"
            />
            <Box px="m" pt="m">
                <Box>
                    <Setting
                        title="Outfit Ideas"
                        description="Receive daily notifications about new outfits"
                    />
                    <Setting
                        title="Discounts & Sales"
                        description="Buy the stuff you love for less"
                    />
                    <Setting
                        title="Stock Notifications"
                        description="If the product you love comes back in stock"
                    />
                    <Setting
                        title="New Stuff"
                        description="Hear it first, wear it first!"
                    />
                </Box>
            </Box>
        </Content>
    );
};

export default NotificationsSettings;
