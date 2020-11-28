import React, { FC, ReactNode } from "react";
import { Dimensions, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { clamp, snapPoint } from "react-native-redash";

import { aspectRatio, Box, useTheme } from "../../components";

const { height: wHeight } = Dimensions.get("window");
const height =
    682 * aspectRatio < wHeight - 120 ? 682 * aspectRatio : wHeight - 120;
const minHeight = 228 * aspectRatio;
const snapPoints = [-(height - minHeight), 0];

interface Props {
    children: ReactNode;
    CheckoutComponent: FC<{ minHeight: number }>;
}

const CartContainer = ({ children, CheckoutComponent }: Props) => {
    const theme = useTheme();

    const translateY = useSharedValue(0);
    const onGestureEvent = useAnimatedGestureHandler<{ y: number }>({
        onStart: (_, context) => {
            context.y = translateY.value;
        },
        onActive: ({ translationY }, context) => {
            translateY.value = clamp(
                context.y + translationY,
                snapPoints[0],
                snapPoints[1]
            );
        },
        onEnd: ({ velocityY }) => {
            const dest = snapPoint(translateY.value, velocityY, snapPoints);
            translateY.value = withSpring(dest);
        },
    });
    const style = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));

    return (
        <Box flex={1}>
            <CheckoutComponent minHeight={minHeight} />
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View
                    style={[
                        {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height,
                            backgroundColor: "white",
                            borderBottomRightRadius: theme.borderRadii.xl,
                            borderBottomLeftRadius: theme.borderRadii.xl,
                            overflow: "hidden",
                        },
                        style,
                    ]}
                >
                    {children}
                    <Box
                        position="absolute"
                        left={0}
                        right={0}
                        bottom={0}
                        alignItems="center"
                        justifyContent="center"
                        p="s"
                        height={theme.spacing.xl}
                    >
                        <View
                            style={{
                                width: 60,
                                height: 5 * aspectRatio,
                                borderRadius: 2.5 * aspectRatio,
                                backgroundColor: "#151624",
                                opacity: 0.1,
                            }}
                        />
                    </Box>
                </Animated.View>
            </PanGestureHandler>
        </Box>
    );
};

export default CartContainer;
