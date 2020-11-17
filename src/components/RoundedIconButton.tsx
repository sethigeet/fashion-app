import React from "react";

import { RectButton } from "react-native-gesture-handler";
import RoundedIcon, { Props as RoundedIconProps } from "./RoundedIcon";

interface Props extends RoundedIconProps {
    onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: Props) => {
    return (
        <RectButton style={{ borderRadius: props.size / 2 }} {...{ onPress }}>
            <RoundedIcon {...props} />
        </RectButton>
    );
};

export default RoundedIconButton;
