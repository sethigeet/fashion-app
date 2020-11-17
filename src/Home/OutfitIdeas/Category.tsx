import React from "react";
import { StyleSheet } from "react-native";
import { Box, Text } from "../../components";

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

interface Props {
    category: {
        id: string;
        title: string;
        color: string;
    };
}

const Category = ({ category: { title, color: backgroundColor } }: Props) => {
    return (
        <Box alignItems="center" ml="m" mt="s">
            <Box
                width={OUTER_RADIUS * 2}
                height={OUTER_RADIUS * 2}
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        borderRadius: OUTER_RADIUS,
                        borderWidth: 1,
                        borderColor: backgroundColor,
                    }}
                />
                <Box
                    width={INNER_RADIUS * 2}
                    height={INNER_RADIUS * 2}
                    style={{
                        borderRadius: INNER_RADIUS,
                        backgroundColor,
                    }}
                />
            </Box>
            <Text>{title}</Text>
        </Box>
    );
};

export default Category;
