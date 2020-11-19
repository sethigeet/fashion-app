import React from "react";
import { Dimensions, ImageRequireSource, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

import Animated, { add, interpolate } from "react-native-reanimated";
import { mix, mixColor, usePanGestureHandler } from "react-native-redash";
import { useSpring } from "./animations";

import { Box } from "../../components";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const width = wWidth * 0.7;
const height = wHeight * 0.6;
const borderRadius = 24;

interface Props {
    position: Animated.Node<number>;
    onSwipe: () => void;
    picture: ImageRequireSource;
    step: number;
}

const Card = ({ position, onSwipe, picture, step }: Props) => {
    const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8") as any;
    const translateYOffset = mix(position, 0, -80);
    const scale = mix(position, 1, 0.7);
    const imageScale = interpolate(position, {
        inputRange: [0, step],
        outputRange: [1.2, 1],
    });
    const imageTopOffset = interpolate(position, {
        inputRange: [0, step],
        outputRange: [0, 7],
    });

    const {
        gestureHandler,
        translation,
        velocity,
        state,
    } = usePanGestureHandler();
    const translateX = useSpring({
        value: translation.x,
        velocity: velocity.x,
        state,
        snapPoints: [-wWidth, 0, wWidth],
        onSnap: ([x]) => x !== 0 && onSwipe(),
    });
    const translateY = add(
        translateYOffset,
        useSpring({
            value: translation.y,
            velocity: velocity.y,
            state,
            snapPoints: [0],
        })
    );

    return (
        <Box
            style={StyleSheet.absoluteFillObject}
            justifyContent="center"
            alignItems="center"
        >
            <PanGestureHandler {...gestureHandler}>
                <Animated.View
                    style={{
                        backgroundColor,
                        width,
                        height,
                        borderRadius,
                        transform: [{ translateY }, { scale }, { translateX }],
                        overflow: "hidden",
                    }}
                >
                    <Animated.Image
                        source={picture}
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            top: imageTopOffset,
                            width: undefined,
                            height: undefined,
                            transform: [{ scale: imageScale }],
                        }}
                    />
                </Animated.View>
            </PanGestureHandler>
        </Box>
    );
};

export default Card;
