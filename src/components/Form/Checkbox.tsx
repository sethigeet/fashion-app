import React from "react";

import { TouchableOpacity } from "react-native-gesture-handler";

import { Feather as Icon } from "@expo/vector-icons";

import Box from "../Box";
import Text from "../Text";
import { useTheme } from "../Theme";

interface Props {
    label: string;
    checked: boolean;
    onChange: () => void;
}

const Checkbox = ({ label, checked, onChange }: Props) => {
    const theme = useTheme();

    const backgroundColor: keyof typeof theme.colors = checked
        ? "primary"
        : "background";
    const color: keyof typeof theme.colors = checked ? "background" : "text";
    const SIZE = theme.borderRadii.m * 2;

    return (
        <TouchableOpacity onPress={onChange}>
            <Box flexDirection="row" alignItems="center">
                <Box
                    width={SIZE}
                    height={SIZE}
                    bg={backgroundColor}
                    borderRadius="s"
                    borderColor="primary"
                    borderWidth={1}
                    justifyContent="center"
                    alignItems="center"
                    mr="s"
                >
                    {checked && (
                        <Icon
                            name="check"
                            color={theme.colors[color]}
                            size={SIZE / 1.3}
                        />
                    )}
                </Box>
                <Text variant="body" color="secondary">
                    {label}
                </Text>
            </Box>
        </TouchableOpacity>
    );
};

export default Checkbox;
