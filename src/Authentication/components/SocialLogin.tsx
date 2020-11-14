import React, { ReactNode } from "react";

import Svg, { Path } from "react-native-svg";

import { Box, Text, theme } from "../../components";

const SIZE = theme.borderRadii.l * 2;

const Facebook = () => (
    <Svg width={10.384} height={20} viewBox="88.428 12.828 107.543 207.085">
        <Path
            d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"
            fill="#3c5a9a"
        />
    </Svg>
);
const Google = () => (
    <Svg
        width={19.554}
        height={20}
        viewBox="0 0 256 262"
        preserveAspectRatio="xMidYMid"
    >
        <Path
            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            fill="#4285F4"
        />
        <Path
            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            fill="#34A853"
        />
        <Path
            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
            fill="#FBBC05"
        />
        <Path
            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            fill="#EB4335"
        />
    </Svg>
);
const Apple = () => (
    <Svg width={16.288} height={20} viewBox="0 0 456.008 560.035">
        <Path
            d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"
            fill="black"
        />
    </Svg>
);

interface SocialIconProps {
    children: ReactNode;
}
const SocialIcon = ({ children }: SocialIconProps) => (
    <Box
        bg="white"
        width={SIZE}
        height={SIZE}
        borderRadius="l"
        justifyContent="center"
        alignItems="center"
        mx="m"
    >
        {children}
    </Box>
);

interface Props {
    facebook: boolean;
    google: boolean;
    apple: boolean;
}

const SocialLogin = ({ facebook, google, apple }: Props) => {
    return (
        <Box flexDirection="row" justifyContent="center" alignItems="center">
            {facebook ? (
                <SocialIcon>
                    <Facebook />
                </SocialIcon>
            ) : null}

            {google ? (
                <SocialIcon>
                    <Google />
                </SocialIcon>
            ) : null}

            {apple ? (
                <SocialIcon>
                    <Apple />
                </SocialIcon>
            ) : null}
        </Box>
    );
};

SocialLogin.defaultProps = {
    facebook: true,
    google: true,
    apple: true,
};

export default SocialLogin;
