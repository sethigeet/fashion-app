import React, { useLayoutEffect, useRef } from "react";
import { Dimensions } from "react-native";

import { Box, Theme, useTheme } from "../../../components";

import { getNumberOfMonths, lerp } from "./UtitlityFn";
import Axes, { AXES_MARGIN } from "./Axes";
import {
    Transition,
    Transitioning,
    TransitioningView,
} from "react-native-reanimated";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

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

    const graphRef = useRef<TransitioningView>(null);
    const tansition = (
        <Transition.Together>
            <Transition.In
                type="slide-bottom"
                durationMs={650}
                interpolation="easeInOut"
            />
        </Transition.Together>
    );

    useLayoutEffect(() => {
        graphRef.current?.animateNextTransition();
    });

    return (
        <Box pb={AXES_MARGIN} pl={AXES_MARGIN}>
            <Axes
                minY={minY}
                maxY={maxY}
                minX={minDate}
                maxX={maxDate}
                step={step}
            />
            <Transitioning.View
                ref={graphRef}
                transition={tansition}
                style={{ overflow: "hidden" }}
            >
                <Box width={width} height={height}>
                    {data.map((point) => {
                        const numberOfPastMonths = getNumberOfMonths(
                            minDate,
                            point.date
                        );
                        return (
                            <Box
                                key={point.id}
                                position="absolute"
                                left={numberOfPastMonths * step}
                                bottom={0}
                                width={step}
                                height={lerp(0, height, point.value / maxY)}
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
                            </Box>
                        );
                    })}
                </Box>
            </Transitioning.View>
        </Box>
    );
};

export default Graph;
