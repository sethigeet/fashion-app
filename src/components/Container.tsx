import React, { ReactNode } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Theme, useTheme } from "./Theme";
import Box from "./Box";

// import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");
const aspectRatio = 750 / 1150;
const imgHeight = width * aspectRatio;

const patterns = [
    require("../Authentication/assets/patterns/1.png"),
    require("../Authentication/assets/patterns/2.png"),
    require("../Authentication/assets/patterns/3.png"),
    require("../Authentication/assets/patterns/4.png"),
];
interface Props {
    top: boolean;
    topCurve: "left" | "right" | "none";
    topColor: keyof Theme["colors"];
    bottom: boolean;
    bottomCurve: "left" | "right" | "none";
    bottomColor: keyof Theme["colors"];
    children?: ReactNode;
    footer?: ReactNode;
    pattern: 1 | 2 | 3 | 4;
}

const Container = ({
    top,
    topCurve,
    topColor,
    bottom,
    bottomCurve,
    bottomColor,
    children,
    footer,
    pattern,
}: Props) => {
    const insets = useSafeAreaInsets();
    const theme = useTheme();

    return (
        <KeyboardAwareScrollView scrollEnabled={false}>
            <Box
                height={
                    height
                    // + (Platform.OS === "android" ? Constants.statusBarHeight : 0)
                }
                bg={bottomColor}
            >
                {top ? (
                    <Box bg="background">
                        <Box
                            width={width}
                            height={imgHeight * 0.61}
                            borderBottomRightRadius={
                                topCurve === "right" ? "xl" : "none"
                            }
                            borderBottomLeftRadius={
                                topCurve === "left" ? "xl" : "none"
                            }
                            bg={topColor}
                            overflow="hidden"
                        >
                            <Image
                                source={patterns[pattern - 1]}
                                style={{
                                    ...StyleSheet.absoluteFillObject,
                                    width,
                                    height: imgHeight,
                                    borderBottomRightRadius:
                                        topCurve === "right"
                                            ? theme.borderRadii.xl
                                            : 0,
                                    borderBottomLeftRadius:
                                        topCurve === "left"
                                            ? theme.borderRadii.xl
                                            : 0,
                                }}
                            />
                        </Box>
                    </Box>
                ) : null}

                <Box flex={1} overflow="hidden">
                    <Box
                        width={width}
                        height={height * 0.2}
                        style={StyleSheet.absoluteFillObject}
                        bg={topColor}
                    >
                        <Image
                            source={patterns[pattern - 1]}
                            style={{
                                ...StyleSheet.absoluteFillObject,
                                top: -imgHeight * 0.61,
                                width,
                                height: imgHeight,
                            }}
                        />
                    </Box>
                    <Box
                        flex={1}
                        bg="background"
                        borderTopRightRadius={
                            top
                                ? topCurve === "right"
                                    ? "none"
                                    : "xl"
                                : "none"
                        }
                        borderTopLeftRadius={
                            top ? (topCurve === "left" ? "none" : "xl") : "none"
                        }
                        borderBottomRightRadius={
                            bottom
                                ? bottomCurve === "right"
                                    ? "none"
                                    : "xl"
                                : "none"
                        }
                        borderBottomLeftRadius={
                            bottom
                                ? bottomCurve === "left"
                                    ? "none"
                                    : "xl"
                                : "none"
                        }
                        overflow="hidden"
                    >
                        {children}
                    </Box>
                </Box>

                {bottom ? (
                    <Box bg="background">
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
        </KeyboardAwareScrollView>
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
