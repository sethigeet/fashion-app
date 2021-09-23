import React from "react";
import { Dimensions, ImageRequireSource, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

import Animated, {
    interpolate,
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { mix, mixColor, snapPoint } from "react-native-redash";

import { Box } from "../../components";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const width = wWidth * 0.7;
const height = wHeight * 0.6;
const borderRadius = 24;

const snapPoints = [-wWidth, 0, wWidth];

interface Props {
    index: number;
    aIndex: Animated.SharedValue<number>;
    onSwipe: () => void;
    picture: ImageRequireSource;
    step: number;
}

const Card = ({ index, aIndex, onSwipe, picture, step }: Props) => {
    const position = useDerivedValue(() => index * step - aIndex.value);

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const onGestureEvent = useAnimatedGestureHandler<{ x: number; y: number }>({
        onStart: (_, ctx) => {
            ctx.x = translateX.value;
            ctx.y = translateY.value;
        },
        onActive: ({ translationX, translationY }, { x, y }) => {
            translateX.value = translationX + x;
            translateY.value = translationY + y;
        },
        onEnd: ({ velocityX, velocityY }) => {
            const dest = snapPoint(translateX.value, velocityX, snapPoints);

            translateY.value = withSpring(0, {
                velocity: velocityY,
            });

            translateX.value = withSpring(
                dest,
                {
                    overshootClamping: dest === 0 ? false : true,
                    restSpeedThreshold: dest === 0 ? 0.01 : 100,
                    restDisplacementThreshold: dest === 0 ? 0.01 : 100,
                },
                () => dest !== 0 && runOnJS(onSwipe)
            );
        },
    });

    const imageStyle = useAnimatedStyle(() => ({
        transform: [
            { scale: interpolate(position.value, [0, step], [1.2, 1]) },
        ],
        top: interpolate(position.value, [0, step], [0, 7]),
    }));
    const cardStyle = useAnimatedStyle(() => {
        const backgroundColor = mixColor(position.value, "#C9E9E7", "#74BCB8");
        const scale = mix(position.value, 1, 0.7);
        const ty = translateY.value + mix(position.value, 0, -80); // translateY

        return {
            backgroundColor,
            transform: [
                { translateY: ty },
                { scale },
                { translateX: translateX.value },
            ],
        };
    });

    return (
        <Box
            style={StyleSheet.absoluteFillObject}
            justifyContent="center"
            alignItems="center"
        >
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View
                    style={[
                        {
                            width,
                            height,
                            borderRadius,
                            overflow: "hidden",
                        },
                        cardStyle,
                    ]}
                >
                    <Animated.Image
                        source={picture}
                        style={[
                            StyleSheet.absoluteFillObject,
                            {
                                width: undefined,
                                height: undefined,
                            },
                            imageStyle,
                        ]}
                    />
                </Animated.View>
            </PanGestureHandler>
        </Box>
    );
};

export default Card;
