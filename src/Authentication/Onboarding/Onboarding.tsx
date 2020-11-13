import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Animated, {
    divide,
    Extrapolate,
    interpolate,
    multiply,
} from "react-native-reanimated";
import { useScrollHandler, interpolateColor } from "react-native-redash/src/v1";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import SubSlide from "./SubSlide";
import Dot from "./Dot";
import { theme } from "../../components";

const { width } = Dimensions.get("window");

const slides = [
    {
        title: "Relaxed",
        subtitle: "Find Your Outfits",
        description:
            "Confused about your outfit? Don't worry! Find the best outfit here!",
        color: "#BFEAF5",
        picture: { src: require("./assets/1.png"), width: 409, height: 958 },
    },
    {
        title: "Playful",
        subtitle: "Hear it First, Wear it Firt",
        description:
            "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
        color: "#BEECC4",
        picture: { src: require("./assets/2.png"), width: 452, height: 1299 },
    },
    {
        title: "Eccentric",
        subtitle: "Your Style, Your Way",
        description:
            "Create your indivisual & unique style and look amazing everyday",
        color: "#FFE4D9",
        picture: { src: require("./assets/3.png"), width: 256, height: 755 },
    },
    {
        title: "Funky",
        subtitle: "Look Good, Feel Good",
        description:
            "Discover the latest trends in fashion and explore your personality",
        color: "#FFDDDD",
        picture: { src: require("./assets/4.png"), width: 651, height: 1224 },
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
                {slides.map(({ picture }, index) => {
                    const opacity = interpolate(x, {
                        inputRange: [
                            (index - 0.5) * width,
                            index * width,
                            (index + 0.5) * width,
                        ],
                        outputRange: [0, 1, 0],
                        extrapolate: Extrapolate.CLAMP,
                    });

                    return (
                        <Animated.View
                            style={[styles.underlay, { opacity }]}
                            key={index}
                        >
                            <Image
                                source={picture.src}
                                style={{
                                    ...StyleSheet.absoluteFillObject,
                                    width: width - theme.borderRadii.xl,
                                    height:
                                        (width - theme.borderRadii.xl) *
                                        (picture.height / picture.width),
                                }}
                            />
                        </Animated.View>
                    );
                })}
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
        borderBottomRightRadius: theme.borderRadii.xl,
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: "flex-end",
        borderBottomRightRadius: theme.borderRadii.xl,
        overflow: "hidden",
    },
    footer: {
        flex: 1,
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: theme.borderRadii.xl,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    footerContent: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: theme.borderRadii.xl,
    },
});
