import React, { ReactNode } from "react";
import { Dimensions, StatusBar, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import theme, { useTheme } from "./Theme";
import Box from "./Box";

const { width, height } = Dimensions.get("window");

interface Props {
    top: boolean;
    topCurve: "left" | "right" | "none";
    topColor: keyof typeof theme.colors;
    bottom: boolean;
    bottomCurve: "left" | "right" | "none";
    bottomColor: keyof typeof theme.colors;
    header?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
}

const Container = ({
    top,
    topCurve,
    topColor,
    bottom,
    bottomCurve,
    bottomColor,
    header,
    children,
    footer,
}: Props) => {
    const insets = useSafeAreaInsets();
    const theme = useTheme();

    return (
        <Box flex={1} bg="secondary">
            <StatusBar
                barStyle="light-content"
                backgroundColor={theme.colors[topColor]}
            />

            {top ? (
                <Box bg="white">
                    <Box
                        width={width}
                        height={height * 0.15}
                        borderBottomRightRadius={
                            topCurve === "right" ? "xl" : "none"
                        }
                        borderBottomLeftRadius={
                            topCurve === "left" ? "xl" : "none"
                        }
                        bg={topColor}
                    >
                        {header}
                    </Box>
                </Box>
            ) : null}

            <Box flex={1} overflow="hidden">
                <Box
                    width={width}
                    height={height * 0.2}
                    position="absolute"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                    bg={topColor}
                />
                <Box
                    flex={1}
                    bg="white"
                    borderTopRightRadius={topCurve === "right" ? "none" : "xl"}
                    borderTopLeftRadius={topCurve === "left" ? "none" : "xl"}
                    borderBottomRightRadius={
                        bottomCurve === "right" ? "none" : "xl"
                    }
                    borderBottomLeftRadius={
                        bottomCurve === "left" ? "none" : "xl"
                    }
                >
                    {children}
                </Box>
            </Box>

            {bottom ? (
                <Box bg="white">
                    <Box
                        width={width}
                        borderTopRightRadius={
                            bottomCurve === "right" ? "xl" : "none"
                        }
                        borderTopLeftRadius={
                            bottomCurve === "left" ? "xl" : "none"
                        }
                        bg={bottomColor}
                        pt="m"
                        style={{ paddingBottom: insets.bottom }}
                    >
                        {footer}
                    </Box>
                </Box>
            ) : null}
        </Box>
    );
};

Container.defaultProps = {
    top: true,
    topCurve: "left",
    topColor: "primary",
    bottom: true,
    bottomCurve: "right",
    bottomColor: "secondary",
};

export default Container;

const styles = StyleSheet.create({});
