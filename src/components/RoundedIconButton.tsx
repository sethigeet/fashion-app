import React from "react";

import { BorderlessButton } from "react-native-gesture-handler";
import RoundedIcon, { Props as RoundedIconProps } from "./RoundedIcon";

interface Props extends RoundedIconProps {
    onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: Props) => {
    return (
        <BorderlessButton
            style={{ borderRadius: props.size / 2 }}
            onPress={onPress}
        >
            <RoundedIcon {...props} />
        </BorderlessButton>
    );
};

export default RoundedIconButton;
