import React, { ReactNode } from "react";
import { Dimensions } from "react-native";
import Svg, { ClipPath, Defs, Path, Image } from "react-native-svg";
import Box from "./Box";
import { useTheme } from "./Theme";

const { width } = Dimensions.get("window");

const viewBox = {
    width: 375,
    height: 100,
};
const height = viewBox.height * (width / viewBox.width);
const d = "M 0 100 A 50 50 0 0 1 50 50 H 325 A 50 50 0 0 0 375 0 V 100 Z";

const ContentFooter = ({ children }: { children: ReactNode }) => {
    const theme = useTheme();
    return (
        <Box flex={1}>
            {children}
            <Svg
                width={width}
                height={height}
                viewBox={[0, 0, viewBox.width, viewBox.height].join(" ")}
                style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}
            >
                <Defs>
                    <ClipPath id="clip">
                        <Path fill={theme.colors.background} d={d} />
                    </ClipPath>
                </Defs>
                <Image
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    href={require("../Authentication/assets/patterns/2.png")}
                    clipPath="url(#clip)"
                />
            </Svg>
        </Box>
    );
};

export default ContentFooter;
