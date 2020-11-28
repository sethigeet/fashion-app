import React, { ReactNode } from "react";
import { Dimensions, StyleSheet } from "react-native";

import { PanGestureHandler, RectButton } from "react-native-gesture-handler";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";

import { LinearGradient } from "expo-linear-gradient";

import {
    aspectRatio,
    Box,
    RoundedIconButton,
    Text,
    useTheme,
} from "../../components";

interface Props {
    children: ReactNode;
    onRemove: () => void;
    increaseQuantity: () => void;
    decreaseQuantity: () => void;
    itemHeight: number;
}

const { width } = Dimensions.get("window");
const actionsWidth = 85 * aspectRatio;
const removeWidth = 130 * aspectRatio;
const snapPoints = [-actionsWidth, 0, removeWidth, width];
const finalDestination = width;

const SwipableRow = ({
    children,
    onRemove,
    increaseQuantity,
    decreaseQuantity,
    itemHeight: defaultItemHeight,
}: Props) => {
    const theme = useTheme();

    const height = useSharedValue(defaultItemHeight);
    const translateX = useSharedValue(0);
    const onGestureEvent = useAnimatedGestureHandler<{ x: number }>({
        onStart: (_, context) => {
            context.x = translateX.value;
        },
        onActive: ({ translationX }, context) => {
            translateX.value = context.x + translationX;
        },
        onEnd: ({ velocityX }) => {
            const dest = snapPoint(translateX.value, velocityX, snapPoints);
            translateX.value = withSpring(dest, { overshootClamping: true });
            if (dest === finalDestination) {
                height.value = withTiming(0, { duration: 300 }, () =>
                    onRemove()
                );
            }
        },
    });
    const style = useAnimatedStyle(() => ({
        height: height.value,
        backgroundColor: theme.colors.background,
        transform: [{ translateX: translateX.value }],
    }));
    const deleteStyle = useAnimatedStyle(() => ({
        opacity: translateX.value > 0 ? 1 : 0,
    }));
    const actionsStyle = useAnimatedStyle(() => ({
        opacity: translateX.value > 0 ? 0 : 1,
    }));

    return (
        <Box>
            <Animated.View style={[StyleSheet.absoluteFillObject, deleteStyle]}>
                <LinearGradient
                    style={[
                        StyleSheet.absoluteFillObject,
                        { justifyContent: "center", opacity: 0.1 },
                    ]}
                    colors={[theme.colors.danger, theme.colors.background]}
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                />
                <Box
                    width={removeWidth} // left pulled width
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                >
                    <RectButton
                        onPress={() => onRemove()}
                        style={{ padding: theme.spacing.s }}
                    >
                        <Text
                            textTransform="uppercase"
                            color="danger"
                            fontWeight="bold"
                            opacity={1}
                        >
                            Remove
                        </Text>
                    </RectButton>
                </Box>
            </Animated.View>
            <Animated.View
                style={[
                    StyleSheet.absoluteFillObject,
                    actionsStyle,
                    {
                        justifyContent: "center",
                        alignItems: "flex-end",
                    },
                ]}
            >
                <LinearGradient
                    style={StyleSheet.absoluteFillObject}
                    colors={[
                        theme.colors.actionsBackground,
                        theme.colors.background,
                    ]}
                    start={[1, 0.5]}
                    end={[1 - actionsWidth / width, 0.5]}
                />
                <Box
                    width={actionsWidth}
                    flex={1}
                    alignSelf="flex-end"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <RoundedIconButton
                        name="plus"
                        size={25}
                        backgroundColor="primary"
                        color="background"
                        onPress={() => increaseQuantity()}
                    />
                    <RoundedIconButton
                        name="minus"
                        size={25}
                        backgroundColor="danger"
                        color="background"
                        onPress={() => decreaseQuantity()}
                    />
                </Box>
            </Animated.View>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View style={style}>{children}</Animated.View>
            </PanGestureHandler>
        </Box>
    );
};

export default SwipableRow;
