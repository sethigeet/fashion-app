import React from "react";
import Svg, { Path } from "react-native-svg";
import { Theme, useTheme } from "./Theme";

interface Props {
    footerHeight: number;
    color: keyof Theme["colors"];
}

const TopCurve = ({ footerHeight, color }: Props) => {
    const theme = useTheme();

    return (
        <Svg
            width={theme.borderRadii.xl}
            height={theme.borderRadii.xl}
            style={{
                position: "absolute",
                bottom: footerHeight,
                right: 0,
            }}
            viewBox=" 0 0 1 1"
        >
            <Path
                d="M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1"
                fill={theme.colors[color]}
            />
        </Svg>
    );
};

export default TopCurve;
