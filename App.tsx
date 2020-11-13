import React from "react";
import { ThemeProvider } from "@shopify/restyle";

import { createStackNavigator } from "@react-navigation/stack";

import {
    Onboarding,
    Welcome,
    assets as authenticationAssets,
} from "./src/Authentication";
import { LoadAssets, theme, Routes } from "./src/components";

const assets = [...authenticationAssets];
const fonts = {
    "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.ttf"),
    "SFProDisplay-SemiBold": require("./assets/fonts/SF-Pro-Display-Semibold.ttf"),
    "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.ttf"),
    "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.ttf"),
};

const AuthenticationStack = createStackNavigator<Routes>();
const AuthenticationNavigator = () => (
    <AuthenticationStack.Navigator headerMode="none">
        <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
        <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
);

export default function App() {
    return (
        <ThemeProvider {...{ theme }}>
            <LoadAssets {...{ fonts, assets }}>
                <AuthenticationNavigator />
            </LoadAssets>
        </ThemeProvider>
    );
}
