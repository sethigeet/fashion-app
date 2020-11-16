import React from "react";

import { TouchableOpacity } from "react-native-gesture-handler";

import { Box, Text } from "../../components";
import SocialLogin from "./SocialLogin";

interface Props {
    onPress: () => void;
    text: string;
    actionText: string;
}

const Footer = ({ text, actionText, onPress }: Props) => (
    <Box mb="s">
        <SocialLogin />
        <Box alignItems="center" mt="m">
            <TouchableOpacity onPress={onPress}>
                <Box flexDirection="row" alignItems="center">
                    <Text variant="buttonText">
                        <Text color="white">{text} </Text>
                        <Text color="primary">{actionText}</Text>
                    </Text>
                </Box>
            </TouchableOpacity>
        </Box>
    </Box>
);

export default Footer;
