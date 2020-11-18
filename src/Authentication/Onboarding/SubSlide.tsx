import React from "react";

import { Text, Box, Button } from "../../components";

interface Props {
    subtitle: string;
    description: string;
    last?: boolean;
    onPress: () => void;
}

const SubSlide = ({ subtitle, description, last, onPress }: Props) => {
    return (
        <Box flex={1} justifyContent="center" alignItems="center" p="xl">
            <Text variant="title2" mb="s" textAlign="center">
                {subtitle}
            </Text>
            <Text variant="body" mb="xl" textAlign="center">
                {description}
            </Text>
            <Button
                label={last ? "Let's Get Started" : "Next"}
                variant={last ? "primary" : "default"}
                onPress={onPress}
            />
        </Box>
    );
};

export default SubSlide;
