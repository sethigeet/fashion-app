import React from "react";
import { Dimensions } from "react-native";

import { Box, Theme, useTheme } from "../../../components";

import { getNumberOfMonths, lerp } from "./UtitlityFn";
import Axes, { AXES_MARGIN } from "./Axes";
import Animated, { divide, multiply, sub } from "react-native-reanimated";
import { useIsFocused } from "@react-navigation/native";
import { useTransition } from "react-native-redash";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

const AnimatedBox = Animated.createAnimatedComponent(Box);

export interface Transaction {
    id: number;
    date: number;
    value: number;
    color: keyof Theme["colors"];
}

interface Props {
    data: Transaction[];
    minDate: number;
    maxDate: number;
}

const Graph = ({ data, minDate, maxDate }: Props) => {
    const theme = useTheme();
    const canvasWidth = wWidth - theme.spacing.l * 2;
    const canvasHeight = canvasWidth * aspectRatio;
    const width = canvasWidth - theme.spacing[AXES_MARGIN];
    const height = canvasHeight - theme.spacing[AXES_MARGIN];
    const numberOfMonths = getNumberOfMonths(minDate, maxDate);
    const step = width / numberOfMonths;

    const values = data.map((p) => p.value);
    const minY = Math.min(...values);
    const maxY = Math.max(...values);

    //# Animation
    const isFocused = useIsFocused();
    const transition = useTransition(isFocused, { duration: 650 });

    return (
        <Box pb={AXES_MARGIN} pl={AXES_MARGIN}>
            <Axes
                minY={minY}
                maxY={maxY}
                minX={minDate}
                maxX={maxDate}
                step={step}
            />
            <Animated.View style={{ overflow: "hidden" }}>
                <Box width={width} height={height}>
                    {data.map((point) => {
                        const numberOfPastMonths = getNumberOfMonths(
                            minDate,
                            point.date
                        );
                        const totalHeight = lerp(0, height, point.value / maxY);
                        const translateY = multiply(
                            totalHeight,
                            sub(1, transition)
                        );

                        return (
                            <AnimatedBox
                                key={point.id}
                                position="absolute"
                                left={numberOfPastMonths * step}
                                bottom={0}
                                width={step}
                                height={totalHeight}
                                style={{ transform: [{ translateY }] }}
                            >
                                <Box
                                    position="absolute"
                                    top={0}
                                    bottom={0}
                                    left={theme.spacing.m}
                                    right={theme.spacing.m}
                                    bg={point.color}
                                    opacity={0.1}
                                    borderTopLeftRadius="m"
                                    borderTopRightRadius="m"
                                />
                                <Box
                                    position="absolute"
                                    top={0}
                                    height={24}
                                    left={theme.spacing.m}
                                    right={theme.spacing.m}
                                    bg={point.color}
                                    borderRadius="m"
                                />
                            </AnimatedBox>
                        );
                    })}
                </Box>
            </Animated.View>
        </Box>
    );
};

export default Graph;
