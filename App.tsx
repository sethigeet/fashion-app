import React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
    AuthenticationNavigator,
    assets as authenticationAssets,
} from "./src/Authentication";
import { LoadAssets, theme } from "./src/components";

const assets = [...authenticationAssets];
const fonts = {
    "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.ttf"),
    "SFProDisplay-SemiBold": require("./assets/fonts/SF-Pro-Display-Semibold.ttf"),
    "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.ttf"),
    "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.ttf"),
};

export default function App() {
    return (
        <ThemeProvider {...{ theme }}>
            <LoadAssets {...{ fonts, assets }}>
                <SafeAreaProvider>
                    <AuthenticationNavigator />
                </SafeAreaProvider>
            </LoadAssets>
        </ThemeProvider>
    );
}
