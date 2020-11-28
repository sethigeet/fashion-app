import React, { ReactNode } from "react";

import { Dimensions, ImageStyle, TextStyle, ViewStyle } from "react-native";
import {
    createTheme,
    useTheme as useReTheme,
    ThemeProvider as ReThemeProvider,
} from "@shopify/restyle";

const { width } = Dimensions.get("window");
export const aspectRatio = width / 375;

export const palette = {
    white: "#FFFFFF",
    orange: "#FE5E33",
    yellow: "#FFC641",
    pink: "#FF87A2",
    violet: "#442CB9",
    lightBlue: "#BFEAF5",
    teal: "#2CB9B0",
    lightTeal: "rgba(44, 185, 176, 0.1)", // teal with opacity = 0.1
    navyBlue: "#0C0D34",
    lightNavyBlue: "rgba(12, 13, 52, 0.7)", // secondary with opacity = 0.7
    lightestNavyBlue: "rgba(12, 13, 52, 0.5)", // secondary with opacity = 0.5
    reddishPink: "#FF0058",
    grey: "#F6F6F6",
    darkGrey: "#808080",
    lightBlack: "#151624",
};

const theme = createTheme({
    colors: {
        primary: palette.teal,
        primaryLight: palette.lightTeal,
        secondary: palette.navyBlue,
        danger: palette.reddishPink,
        text: palette.lightNavyBlue,
        lightText: palette.lightestNavyBlue,
        placeholder: palette.lightBlack,
        background: palette.white,
        info: palette.darkGrey,
        background2: palette.grey,
        actionsBackground: palette.lightBlue,

        graph1: palette.violet,
        graph2: palette.reddishPink,
        graph3: palette.teal,
        graph4: palette.orange,
        graph5: palette.pink,
        graph6: palette.yellow,

        drawer1: palette.teal,
        drawer2: palette.orange,
        drawer3: palette.yellow,
        drawer4: palette.pink,
        drawer5: palette.violet,
        drawer6: palette.navyBlue,
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii: {
        none: 0,
        s: 4,
        m: 10,
        l: 25,
        xl: 75,
    },
    textVariants: {
        hero: {
            fontSize: 80,
            lineHeight: 80,
            fontFamily: "SFProDisplay-Bold",
            color: "background",
            textAlign: "center",
        },
        title1: {
            fontSize: 28,
            fontFamily: "SFProDisplay-SemiBold",
            color: "secondary",
        },
        title2: {
            fontSize: 24,
            lineHeight: 30,
            fontFamily: "SFProDisplay-SemiBold",
            color: "secondary",
        },
        title3: {
            fontSize: 16,
            lineHeight: 20,
            fontFamily: "SFProDisplay-SemiBold",
            color: "secondary",
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "SFProDisplay-Regular",
            color: "text",
        },
        buttonText: {
            fontSize: 15,
            fontFamily: "SFProDisplay-Medium",
            color: "secondary",
        },
        header: {
            fontSize: 12,
            lineHeight: 24,
            fontFamily: "SFProDisplay-SemiBold",
            color: "secondary",
        },
        placeholder: {
            fontSize: 14,
            lineHeight: 20,
            fontFamily: "SFProDisplay-Regular",
            color: "lightText",
        },
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
});

export type Theme = typeof theme;
export const useTheme = () => useReTheme<Theme>();

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
    <ReThemeProvider theme={theme}>{children}</ReThemeProvider>
);

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
export const makeStyles = <T extends NamedStyles<T> | NamedStyles<any>>(
    styles: (theme: Theme) => T
) => () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
};
