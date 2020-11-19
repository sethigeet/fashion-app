import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
    AuthenticationNavigator,
    assets as authenticationAssets,
} from "./src/Authentication";
import { HomeNavigator } from "./src/Home";

import { LoadAssets, AppRoutes, ThemeProvider } from "./src/components";

import { createStackNavigator } from "@react-navigation/stack";

const assets = [...authenticationAssets];
const fonts = {
    "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.ttf"),
    "SFProDisplay-SemiBold": require("./assets/fonts/SF-Pro-Display-Semibold.ttf"),
    "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.ttf"),
    "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.ttf"),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
    return (
        <ThemeProvider>
            <LoadAssets fonts={fonts} assets={assets}>
                <StatusBar style="light" />
                <SafeAreaProvider>
                    <AppStack.Navigator headerMode="none">
                        <AppStack.Screen
                            name="Authentication"
                            component={AuthenticationNavigator}
                        />
                        <AppStack.Screen
                            name="Home"
                            component={HomeNavigator}
                        />
                    </AppStack.Navigator>
                </SafeAreaProvider>
            </LoadAssets>
        </ThemeProvider>
    );
}
