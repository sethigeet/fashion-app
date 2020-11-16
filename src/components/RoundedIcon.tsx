import React from "react";

import { Feather as Icon } from "@expo/vector-icons";

import { Theme, useTheme } from "./Theme";
import Box from "./Box";

export interface Props {
    name: string;
    size: number;
    iconRatio?: number;
    color: keyof Theme["colors"];
    backgroundColor: keyof Theme["colors"];
}

const RoundedIcon = ({
    name,
    size,
    iconRatio = 0.7,
    color,
    backgroundColor,
}: Props) => {
    const { colors } = useTheme();

    return (
        <Box
            height={size}
            width={size}
            style={{ borderRadius: size / 2 }}
            bg={backgroundColor}
            alignItems="center"
            justifyContent="center"
        >
            <Icon size={size * iconRatio} color={colors[color]} {...{ name }} />
        </Box>
    );
};

export default RoundedIcon;
