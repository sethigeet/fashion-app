import React from "react";
import { StyleSheet } from "react-native";

import { Box, palette } from "../../components";

const Background = () => {
    return (
        <Box flex={1} style={StyleSheet.absoluteFillObject}>
            <Box flex={1 / 2} style={{ backgroundColor: palette.lightBlue }}>
                <Box flex={1} bg="background" borderBottomRightRadius="xl" />
            </Box>
            <Box flex={1 / 3} bg="secondary" borderTopLeftRadius="xl">
                <Box
                    flex={1}
                    style={{ backgroundColor: palette.lightBlue }}
                    borderBottomRightRadius="xl"
                    borderTopLeftRadius="xl"
                />
            </Box>
            <Box flex={1 / 4} style={{ backgroundColor: palette.lightBlue }}>
                <Box flex={1} bg="secondary" borderTopLeftRadius="xl" />
            </Box>
        </Box>
    );
};

export default Background;
