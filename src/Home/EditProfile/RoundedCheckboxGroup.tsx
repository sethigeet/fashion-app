import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";

import { Box, Button, Text, useTheme } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";

export interface Option {
    value: string;
}
interface Props {
    options: Option[];
    valueIsColor?: boolean;
}

const RoundedCheckboxGroup = ({ options, valueIsColor = false }: Props) => {
    const theme = useTheme();
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const SIZE = 40;
    const PADDING = 9;

    const onPress = (value: string) => {
        const isSelected = selectedValues.includes(value);
        if (isSelected) {
            setSelectedValues((prevSelectedValues) => {
                const newSelectedValues = [...prevSelectedValues];
                newSelectedValues.splice(newSelectedValues.indexOf(value), 1);
                return newSelectedValues;
            });
        } else {
            setSelectedValues((prevSelectedValues) => [
                ...prevSelectedValues,
                value,
            ]);
        }
    };

    return (
        <Box flexDirection="row" flexWrap="wrap">
            {options.map(({ value }) => {
                const isSelected = selectedValues.includes(value);
                const backgroundColor = valueIsColor
                    ? value
                    : isSelected
                    ? theme.colors.primary
                    : theme.colors.background2;

                return (
                    <Box
                        key={value}
                        alignItems="center"
                        justifyContent="center"
                        height={SIZE + PADDING}
                        width={SIZE + PADDING}
                        style={{ borderRadius: SIZE + PADDING, margin: 2 }}
                        borderWidth={isSelected ? 2 : 0}
                        borderColor="background2"
                    >
                        <RectButton
                            style={{
                                height: SIZE,
                                width: SIZE,
                                borderRadius: SIZE / 2,
                                backgroundColor,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            onPress={() => onPress(value)}
                        >
                            {!valueIsColor && (
                                <Text
                                    variant="header"
                                    color={
                                        isSelected ? "background" : "secondary"
                                    }
                                >
                                    {value.toUpperCase()}
                                </Text>
                            )}
                            {valueIsColor && isSelected && (
                                <Icon
                                    name="check"
                                    size={SIZE - PADDING}
                                    color="white"
                                />
                            )}
                        </RectButton>
                    </Box>
                );
            })}
        </Box>
    );
};

export default RoundedCheckboxGroup;
