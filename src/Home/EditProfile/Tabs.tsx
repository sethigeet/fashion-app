import React, { Children, ReactNode, useState } from "react";
import { Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { mix, useTiming } from "react-native-redash";
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

    const transition = useTiming(activeTabIndex, { duration: 200 });

    const activeDotStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: mix(transition.value, width * 0.25, width * 0.75) },
        ],
    }));
    const contentStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: -width * transition.value }],
    }));

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
                    style={[
                        {
                            position: "absolute",
                            bottom: 0,
                            left: -activeDotSize / 2,
                            width: activeDotSize,
                            height: activeDotSize,
                            borderRadius: activeDotSize / 2,
                            backgroundColor: theme.colors.primary,
                        },
                        activeDotStyle,
                    ]}
                />
            </Box>
            <Animated.View
                style={[
                    {
                        flex: 1,
                        width: width * tabs.length,
                        flexDirection: "row",
                    },
                    contentStyle,
                ]}
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
