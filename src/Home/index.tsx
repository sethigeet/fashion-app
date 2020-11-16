import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../components";

import OutfitIdeas from "./OutfitIdeas";

const HomeDrawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
    <HomeDrawer.Navigator>
        <HomeDrawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    </HomeDrawer.Navigator>
);
