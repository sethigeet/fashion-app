import React from "react";
import { Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";

import { Box, HomeNavigationProps, useTheme } from "../../components";

const { height: wHeight } = Dimensions.get("window");
const height = wHeight - 120;

const Cart = ({}: HomeNavigationProps<"Cart">) => {
    const theme = useTheme();

    const translateY = useSharedValue(0);
    const onGestureEvent = useAnimatedGestureHandler({
        onActive: ({ translationY }) => {
            translateY.value = translationY;
        },
    });
    const style = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));

    return (
        <Box flex={1} bg="secondary">
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
                        },
                        style,
                    ]}
                ></Animated.View>
            </PanGestureHandler>
        </Box>
    );
};

export default Cart;
