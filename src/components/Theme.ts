import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { createTheme, useTheme as useReTheme } from "@shopify/restyle";

const palette = {
    white: "#FFFFFF",
    orange: "#FE5E33",
    yellow: "#FFC641",
    pink: "#FF87A2",
    violet: "#442CB9",
    lightBlue: "#BFEAF5",
};

const theme = createTheme({
    colors: {
        primary: "#2CB9B0",
        primaryLight: "rgba(44, 185, 176, 0.1)", // primary with opacity = 0.1
        secondary: "#0C0D34",
        danger: "#FF0058",
        text: "rgba(12, 13, 52, 0.7)", // secondary with opacity = 0.7
        grey: "rgba(12, 13, 52, 0.05)", // secondary with opacity = 0.5
        placeholder: "#151624",
        white: palette.white,
        lightGrey: "#FAFAFA",
        orange: palette.orange,
        yellow: palette.yellow,
        pink: palette.pink,
        violet: palette.violet,
        lightBlue: palette.lightBlue,
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
            color: "white",
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
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
});

export type Theme = typeof theme;
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };
export const makeStyles = <T extends NamedStyles<T> | NamedStyles<any>>(
    styles: (theme: Theme) => T
) => () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
};

export default theme;
