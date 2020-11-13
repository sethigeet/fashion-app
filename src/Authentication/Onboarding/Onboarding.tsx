import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, { divide, multiply } from "react-native-reanimated";
import { useScrollHandler, interpolateColor } from "react-native-redash/src/v1";

import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from "./Slide";
import SubSlide from "./SubSlide";
import Dot from "./Dot";

const { width } = Dimensions.get("window");

const slides = [
    {
        title: "Relaxed",
        subtitle: "Find Your Outfits",
        description:
            "Confused about your outfit? Don't worry! Find the best outfit here!",
        color: "#BFEAF5",
        picture: require("./assets/1.png"),
    },
    {
        title: "Playful",
        subtitle: "Hear it First, Wear it Firt",
        description:
            "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
        color: "#BEECC4",
        picture: require("./assets/2.png"),
    },
    {
        title: "Eccentric",
        subtitle: "Your Style, Your Way",
        description:
            "Create your indivisual & unique style and look amazing everyday",
        color: "#FFE4D9",
        picture: require("./assets/3.png"),
    },
    {
        title: "Funky",
        subtitle: "Look Good, Feel Good",
        description:
            "Discover the latest trends in fashion and explore your personality",
        color: "#FFDDDD",
        picture: require("./assets/4.png"),
    },
];

const Onboarding = () => {
    const scrollRef = useRef(null);
    const { scrollHandler, x } = useScrollHandler();
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map((slide) => slide.color),
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView
                    ref={scrollRef}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    {...scrollHandler}
                >
                    {slides.map(({ title, picture }, index) => (
                        <Slide
                            key={index}
                            right={index % 2 !== 0}
                            {...{ title, picture }}
                        />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor,
                    }}
                />
                <View style={styles.footerContent}>
                    <View style={styles.pagination}>
                        {slides.map((_, index) => (
                            <Dot
                                key={index}
                                currentIndex={divide(x, width)}
                                {...{ index }}
                            />
                        ))}
                    </View>
                    <Animated.View
                        style={{
                            width: width * slides.length,
                            transform: [{ translateX: multiply(x, -1) }],
                            flex: 1,
                            flexDirection: "row",
                        }}
                    >
                        {slides.map(({ subtitle, description }, index) => (
                            <SubSlide
                                key={index}
                                last={index === slides.length - 1}
                                onPress={() =>
                                    scrollRef.current?.getNode().scrollTo({
                                        x: width * (index + 1),
                                        animated: true,
                                    })
                                }
                                {...{ subtitle, description }}
                            />
                        ))}
                    </Animated.View>
                </View>
            </View>
        </View>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: BORDER_RADIUS,
    },
    footer: {
        flex: 1,
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: BORDER_RADIUS,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    footerContent: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: BORDER_RADIUS,
    },
});
