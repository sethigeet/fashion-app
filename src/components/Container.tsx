import React, { ReactNode } from "react";
import { Dimensions, StyleSheet } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Theme } from "./Theme";
import Box from "./Box";

// import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

interface Props {
    top: boolean;
    topCurve: "left" | "right" | "none";
    topColor: keyof Theme["colors"];
    bottom: boolean;
    bottomCurve: "left" | "right" | "none";
    bottomColor: keyof Theme["colors"];
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

    return (
        <KeyboardAwareScrollView scrollEnabled={false}>
            <Box
                height={
                    height
                    // + (Platform.OS === "android" ? Constants.statusBarHeight : 0)
                }
                bg="secondary"
            >
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
                        style={StyleSheet.absoluteFillObject}
                        bg={topColor}
                    />
                    <Box
                        flex={1}
                        bg="white"
                        borderTopRightRadius={
                            topCurve === "right" ? "none" : "xl"
                        }
                        borderTopLeftRadius={
                            topCurve === "left" ? "none" : "xl"
                        }
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
