import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { AuthenticationRoutes } from "../components";

import Onboarding from "./Onboarding";
import Welcome from "./Welcome";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import PasswordChanged from "./PasswordChanged";

import { assets as onboardingAssets } from "./Onboarding";
import { assets as welcomeAssets } from "./Welcome";

const patternAssets = [
    require("./assets/patterns/1.png"),
    require("./assets/patterns/2.png"),
    require("./assets/patterns/3.png"),
    require("./assets/patterns/4.png"),
];
export const assets = [...onboardingAssets, ...welcomeAssets, ...patternAssets];

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();
export const AuthenticationNavigator = () => (
    <AuthenticationStack.Navigator headerMode="none">
        <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
        <AuthenticationStack.Screen name="Welcome" component={Welcome} />
        <AuthenticationStack.Screen name="Login" component={Login} />
        <AuthenticationStack.Screen name="SignUp" component={SignUp} />
        <AuthenticationStack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
        />
        <AuthenticationStack.Screen
            name="PasswordChanged"
            component={PasswordChanged}
        />
    </AuthenticationStack.Navigator>
);
