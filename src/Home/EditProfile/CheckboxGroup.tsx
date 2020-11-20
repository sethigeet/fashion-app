import React, { useState } from "react";

import { Box, Button, Text } from "../../components";

export interface Option {
    value: string;
    label: string;
}
interface Props {
    options: Option[];
    width?: number;
    radio?: boolean;
}

const CheckboxGroup = ({ options, width, radio = false }: Props) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    return (
        <Box flexDirection="row" flexWrap="wrap">
            {options.map(({ value, label }) => {
                const isSelected = selectedValues.includes(value);
                return (
                    <Button
                        key={value}
                        variant={isSelected ? "primary" : "default"}
                        label={label}
                        onPress={() => {
                            if (radio) {
                                setSelectedValues([value]);
                            } else {
                                if (isSelected) {
                                    setSelectedValues((prevSelectedValues) => {
                                        const newSelectedValues = [
                                            ...prevSelectedValues,
                                        ];
                                        newSelectedValues.splice(
                                            newSelectedValues.indexOf(value),
                                            1
                                        );
                                        return newSelectedValues;
                                    });
                                } else {
                                    setSelectedValues((prevSelectedValues) => [
                                        ...prevSelectedValues,
                                        value,
                                    ]);
                                }
                            }
                        }}
                        style={{
                            width: width ? width : undefined,
                            height: 35,
                            padding: 15,
                            margin: 4,
                        }}
                    />
                );
            })}
        </Box>
    );
};

export default CheckboxGroup;
