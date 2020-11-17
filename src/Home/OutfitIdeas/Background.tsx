import React from "react";
import { StyleSheet } from "react-native";

import { Box } from "../../components";

const Background = () => {
    return (
        <Box flex={1} style={StyleSheet.absoluteFillObject}>
            <Box flex={1 / 2} bg="lightBlue">
                <Box flex={1} bg="white" borderBottomRightRadius="xl" />
            </Box>
            <Box flex={1 / 3} bg="secondary" borderTopLeftRadius="xl">
                <Box
                    flex={1}
                    bg="lightBlue"
                    borderBottomRightRadius="xl"
                    borderTopLeftRadius="xl"
                />
            </Box>
            <Box flex={1 / 4} bg="lightBlue">
                <Box flex={1} bg="secondary" borderTopLeftRadius="xl" />
            </Box>
        </Box>
    );
};

export default Background;
