import { createTheme } from "@shopify/restyle";

const palette = {
    white: "#F0F2F3",
};

const theme = createTheme({
    colors: {
        primary: "#2CB9B0",
        title: "#0C0D34",
        text: "rgba(12, 13, 52, 0.7)", // title with opacity = 0.7
        buttonText: "#0C0D34",
        white: palette.white,
        grey: "rgba(12, 13, 52, 0.05)",
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii: {
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
            color: "title",
        },
        title2: {
            fontSize: 24,
            lineHeight: 30,
            fontFamily: "SFProDisplay-SemiBold",
            color: "title",
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
            color: "buttonText",
        },
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
});

export type Theme = typeof theme;
export default theme;
