import React from "react";
import { ScrollView } from "react-native";

import { Box, Text } from "../../components";

import CheckboxGroup, { Option } from "./CheckboxGroup";
import RoundedCheckboxGroup, {
    Option as RoundedCheckboxOption,
} from "./RoundedCheckboxGroup";

const Configuration = () => {
    const outfitTypes: Option[] = [
        { value: "men", label: "For Men" },
        { value: "women", label: "For Women" },
        { value: "both", label: "For Both" },
    ];
    const sizeTypes: RoundedCheckboxOption[] = [
        { value: "xs" },
        { value: "s" },
        { value: "m" },
        { value: "l" },
        { value: "xl" },
    ];
    const preferredColors: RoundedCheckboxOption[] = [
        { value: "#0C0D34" },
        { value: "#FF0058" },
        { value: "#50B9DE" },
        { value: "#00D99A" },
        { value: "#FE5E33" },
        { value: "#FF87A2" },
    ];
    const preferredBrands: Option[] = [
        { value: "adidas", label: "Adidas" },
        { value: "nike", label: "Nike" },
        { value: "converse", label: "Converse" },
        { value: "tommy-hilfiger", label: "Tommy Hilfiger" },
        { value: "billionaire-boys-club", label: "Billionaire Boys Club" },
        { value: "jordan", label: "Jordan" },
        { value: "le-coq-sportsif", label: "Le Coq Sportsif" },
    ];

    return (
        <ScrollView style={{ marginTop: 10 }}>
            <Box px="m">
                <Box mb="m">
                    <Text variant="placeholder" marginLeft="s">
                        What type of outfit do you usually wear?
                    </Text>
                    <CheckboxGroup options={outfitTypes} radio />
                </Box>
                <Box mb="m">
                    <Text variant="placeholder" marginLeft="s">
                        What is your clothing size?
                    </Text>
                    <RoundedCheckboxGroup options={sizeTypes} />
                </Box>
                <Box mb="m">
                    <Text variant="placeholder" marginLeft="s">
                        My preferred clothing colors
                    </Text>
                    <RoundedCheckboxGroup
                        options={preferredColors}
                        valueIsColor
                    />
                </Box>
                <Box mb="m">
                    <Text variant="placeholder" marginLeft="s">
                        My preferred brands
                    </Text>
                    <CheckboxGroup options={preferredBrands} />
                </Box>
            </Box>
        </ScrollView>
    );
};

export default Configuration;
