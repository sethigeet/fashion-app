import React from "react";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";

interface Props {
    index: number;
    currentIndex: Animated.SharedValue<number>;
}

const Dot = ({ index, currentIndex }: Props) => {
    const style = useAnimatedStyle(() => ({
        opacity: interpolate(
            currentIndex.value,
            [index - 1, index, index + 1],
            [0.5, 1, 0.5],
            Extrapolate.CLAMP
        ),
        transform: [
            {
                scale: interpolate(
                    currentIndex.value,
                    [index - 1, index, index + 1],
                    [1, 1.25, 1],
                    Extrapolate.CLAMP
                ),
            },
        ],
        backgroundColor: "#2cb9b0",
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
    }));

    return <Animated.View style={style} />;
};

export default Dot;
