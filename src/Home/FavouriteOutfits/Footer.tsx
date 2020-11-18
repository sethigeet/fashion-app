import React from "react";
import { Box, Button } from "../../components";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
    label: string;
    onPress: () => void;
}

const Footer = ({ onPress, label }: Props) => {
    // const insets = useSafeAreaInsets();

    return (
        <Box
            bg="secondary"
            p="m"
            alignItems="center"
            borderTopLeftRadius="xl"
            // style={{ paddingBottom: insets.bottom }}
        >
            <Button variant="primary" label={label} onPress={onPress} />
        </Box>
    );
};

export default Footer;
