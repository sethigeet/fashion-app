import React, { ReactNode } from "react";
import { Dimensions } from "react-native";
import { BorderlessTap, Box, Theme } from "../../components";

interface Props {
    onPress: () => void;
    children: ReactNode;
    backgroundColor: keyof Theme["colors"];
}

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const width = (120 * wWidth) / 375;
const height = (160 * wHeight) / 800;

const CardLayout = ({ onPress, children, backgroundColor }: Props) => {
    return (
        <BorderlessTap onPress={onPress}>
            <Box
                width={width}
                height={height}
                borderRadius="m"
                ml="m"
                bg={backgroundColor}
            >
                {children}
            </Box>
        </BorderlessTap>
    );
};

export default CardLayout;
