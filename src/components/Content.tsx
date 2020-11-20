import React, { ReactNode } from "react";
import { Dimensions, StyleSheet, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import Box from "./Box";
import { useTheme } from "./Theme";

const { width } = Dimensions.get("window");

const viewBox = {
    width: 375,
    height: 100,
};
const height = viewBox.height * (width / viewBox.width);
const d = "M 0 0 H 375 A 50 50 0 0 1 325 50 H 50 A 50 50 0 0 0 0 100";

const ContentFooter = ({ children }: { children: ReactNode }) => {
    const theme = useTheme();
    return (
        <>
            <Box
                style={{
                    ...StyleSheet.absoluteFillObject,
                    justifyContent: "flex-end",
                }}
            >
                <Image
                    source={require("../Authentication/assets/patterns/1.png")}
                    style={{
                        width: width,
                        height: (width * 750) / 1150,
                    }}
                />
                <Image
                    source={require("../Authentication/assets/patterns/2.png")}
                    style={{
                        width: width,
                        height: (width * 750) / 1150,
                    }}
                />
                <Image
                    source={require("../Authentication/assets/patterns/3.png")}
                    style={{
                        width: width,
                        height: (width * 750) / 1150,
                    }}
                />
            </Box>
            <Box bg="background">{children}</Box>
            <Svg
                width={width}
                height={height}
                viewBox={[0, 0, viewBox.width, viewBox.height].join(" ")}
            >
                <Path fill={theme.colors.background} d={d} />
            </Svg>
        </>
    );
};

export default ContentFooter;
