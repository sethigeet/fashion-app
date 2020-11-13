import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../components";

import Onboarding from "./Onboarding";
import Welcome from "./Welcome";

import { assets as onboardingAssets } from "./Onboarding";
import { assets as welcomeAssets } from "./Welcome";

export const assets = [...onboardingAssets, ...welcomeAssets];

const AuthenticationStack = createStackNavigator<Routes>();
export const AuthenticationNavigator = () => (
    <AuthenticationStack.Navigator headerMode="none">
        <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
        <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
);
