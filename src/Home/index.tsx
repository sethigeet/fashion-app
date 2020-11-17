import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../components";

import DrawerContent, { DRAWER_WIDTH } from "./Drawer";
import OutfitIdeas from "./OutfitIdeas";

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
        </HomeDrawer.Navigator>
    );
};
