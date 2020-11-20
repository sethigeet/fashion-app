import React, { useState } from "react";
import { Switch } from "react-native";
import { Box, Text, useTheme } from "../../components";

interface Props {
    title: string;
    description: string;
}

const Setting = ({ title, description }: Props) => {
    const theme = useTheme();
    const [toggled, setToggled] = useState(false);

    return (
        <Box flexDirection="row" mb="m" justifyContent="center">
            <Box flex={1}>
                <Text variant="title3">{title}</Text>
                <Text variant="placeholder" fontSize={13} lineHeight={26}>
                    {description}
                </Text>
            </Box>
            <Box>
                <Switch
                    value={toggled}
                    onValueChange={(value) => setToggled(value)}
                    trackColor={{
                        true: theme.colors.primary,
                        false: theme.colors.background2,
                    }}
                    thumbColor={theme.colors.background}
                />
            </Box>
        </Box>
    );
};

export default Setting;
