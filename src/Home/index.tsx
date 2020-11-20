import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../components";

import DrawerContent, { DRAWER_WIDTH, drawerAssets } from "./Drawer";
import OutfitIdeas from "./OutfitIdeas";
import FavouriteOutfits from "./FavouriteOutfits";
import TransactionHistory from "./TransactionHistory";
import EditProfile from "./EditProfile";
import NotificationsSettings from "./NotificationsSettings";
import Cart from "./Cart";

export const assets = [...drawerAssets];

const HomeDrawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => {
    return (
        <HomeDrawer.Navigator
            drawerContent={DrawerContent}
            drawerStyle={{
                width: DRAWER_WIDTH,
            }}
        >
            <HomeDrawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
            <HomeDrawer.Screen
                name="FavouriteOutfits"
                component={FavouriteOutfits}
            />
            <HomeDrawer.Screen
                name="TransactionHistory"
                component={TransactionHistory}
            />
            <HomeDrawer.Screen name="EditProfile" component={EditProfile} />
            <HomeDrawer.Screen
                name="NotificationsSettings"
                component={NotificationsSettings}
            />
            <HomeDrawer.Screen name="Cart" component={Cart} />
        </HomeDrawer.Navigator>
    );
};
