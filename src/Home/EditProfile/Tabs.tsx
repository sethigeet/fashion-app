import React, { Children, ReactNode, useState } from "react";
import { Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Animated, { multiply, sub } from "react-native-reanimated";
import { mix, useTransition } from "react-native-redash/src/v1";
import { Box, Text, useTheme } from "../../components";

const { width } = Dimensions.get("window");

export interface Tab {
    id: string;
    label: string;
}

interface Props {
    tabs: Tab[];
    children: ReactNode;
}

const Tabs = ({ tabs, children }: Props) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const theme = useTheme();
    const activeDotSize = theme.borderRadii.m;

    const transition = useTransition(activeTabIndex, { duration: 200 });
    const activeDotTranslateX = mix(transition, width * 0.25, width * 0.75);
    const contentTranslateX = multiply(-width, transition);

    return (
        <Box flex={1}>
            <Box flexDirection="row">
                {tabs.map((tab, index) => (
                    <RectButton
                        key={index}
                        style={{ flex: 1, width: width / tabs.length }}
                        onPress={() => setActiveTabIndex(index)}
                    >
                        <Box p="m" alignItems="center">
                            <Text
                                variant="title2"
                                fontSize={20}
                                textAlign="center"
                                color={
                                    index === activeTabIndex
                                        ? "secondary"
                                        : "info"
                                }
                            >
                                {tab.label}
                            </Text>
                        </Box>
                    </RectButton>
                ))}
                <Animated.View
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: -activeDotSize / 2,
                        transform: [{ translateX: activeDotTranslateX }],
                        width: activeDotSize,
                        height: activeDotSize,
                        borderRadius: activeDotSize / 2,
                        backgroundColor: theme.colors.primary,
                    }}
                />
            </Box>
            <Animated.View
                style={{
                    flex: 1,
                    width: width * tabs.length,
                    flexDirection: "row",
                    transform: [{ translateX: contentTranslateX }],
                }}
            >
                {Children.map(children, (child, index) => (
                    <Box flex={1} key={index} width={width}>
                        {child}
                    </Box>
                ))}
            </Animated.View>
        </Box>
    );
};

export default Tabs;
