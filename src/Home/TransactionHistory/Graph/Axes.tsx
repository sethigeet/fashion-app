import React from "react";
import { StyleSheet } from "react-native";

import { Box, Text, useTheme } from "../../../components";

import {
    lerp,
    getMonthName,
    getNumberOfMonths,
    changeDateMonth,
} from "./UtitlityFn";

interface Props {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    step: number;
}

const ROW_HEIGHT = 16;
export const AXES_MARGIN = "xl";

const Axes = ({ minX, maxX, minY, maxY, step }: Props) => {
    const theme = useTheme();
    const numberOfMonths = getNumberOfMonths(minX, maxX);

    return (
        <Box style={StyleSheet.absoluteFillObject}>
            <Box flex={1} justifyContent="space-between">
                {[1, 0.66, 0.33, 0].map((t) => (
                    <Box
                        key={t}
                        flexDirection="row"
                        alignItems="center"
                        height={ROW_HEIGHT}
                        style={{
                            top:
                                t === 0
                                    ? ROW_HEIGHT / 2
                                    : t === 1
                                    ? -ROW_HEIGHT / 2
                                    : 0,
                        }}
                    >
                        <Box width={theme.spacing[AXES_MARGIN]} mr="s">
                            <Text color="info" textAlign="right">
                                {Math.round(lerp(minY, maxY, t))}
                            </Text>
                        </Box>
                        <Box flex={1} height={2} bg="background2" />
                    </Box>
                ))}
            </Box>
            <Box
                ml={AXES_MARGIN}
                height={theme.spacing[AXES_MARGIN]}
                flexDirection="row"
                alignItems="center"
            >
                {new Array(numberOfMonths)
                    .fill(0)
                    .map((_, i) => new Date(changeDateMonth(minX, i)).getTime())
                    .map((date, index) => (
                        <Box width={step} key={index}>
                            <Text color="info" textAlign="center">
                                {getMonthName(date)}
                            </Text>
                        </Box>
                    ))}
            </Box>
        </Box>
    );
};

export default Axes;
