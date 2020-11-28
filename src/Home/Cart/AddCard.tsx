import React from "react";

import { Feather as Icon } from "@expo/vector-icons";

import { Box } from "../../components";

import CardLayout from "./CardLayout";
import { StyleSheet } from "react-native";

const AddCard = () => {
    return (
        <CardLayout onPress={() => {}} backgroundColor="secondary">
            <Box
                bg="background"
                opacity={0.05}
                style={StyleSheet.absoluteFill}
            />
            <Box
                flex={1}
                p="s"
                justifyContent="center"
                alignItems="center"
                borderWidth={2}
                borderColor="background2"
                borderStyle="dashed"
                borderRadius="m"
            >
                <Icon name="plus" size={25} color="white" />
            </Box>
        </CardLayout>
    );
};

export default AddCard;
