import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
} from "react-native-reanimated";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import SubSlide from "./SubSlide";
import Dot from "./Dot";

import {
    AuthNavigationProps,
    Theme,
    useTheme,
    makeStyles,
} from "../../components";
import { interpolateColor } from "react-native-redash";

const { width } = Dimensions.get("window");

const slides = [
    {
        title: "Relaxed",
        subtitle: "Find Your Outfits",
        description:
            "Confused about your outfit? Don't worry! Find the best outfit here!",
        color: "#BFEAF5",
        picture: { src: require("../assets/1.png"), width: 409, height: 958 },
    },
    {
        title: "Playful",
        subtitle: "Hear it First, Wear it Firt",
        description:
            "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
        color: "#BEECC4",
        picture: { src: require("../assets/2.png"), width: 452, height: 1299 },
    },
    {
        title: "Eccentric",
        subtitle: "Your Style, Your Way",
        description:
            "Create your indivisual & unique style and look amazing everyday",
        color: "#FFE4D9",
        picture: { src: require("../assets/3.png"), width: 256, height: 755 },
    },
    {
        title: "Funky",
        subtitle: "Look Good, Feel Good",
        description:
            "Discover the latest trends in fashion and explore your personality",
        color: "#FFDDDD",
        picture: { src: require("../assets/4.png"), width: 651, height: 1224 },
    },
];

export const assets = [slides.map(({ picture: { src } }) => src)];

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
    const scrollRef = useRef<Animated.ScrollView>(null);
    const x = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: ({ contentOffset }) => {
            x.value = contentOffset.x;
        },
    });

    const backgroundColor = useDerivedValue(() =>
        interpolateColor(
            x.value,
            slides.map((_, i) => i * width),
            slides.map((slide) => slide.color)
        )
    );
    const sliderStyle = useAnimatedStyle(() => ({
        backgroundColor: backgroundColor.value,
    }));
    const backgroundStyle = useAnimatedStyle(() => ({
        backgroundColor: backgroundColor.value,
    }));
    const footerStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: -x.value }],
    }));
    const currentIndex = useDerivedValue(() => x.value / width);

    const theme = useTheme();
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, sliderStyle]}>
                {slides.map(({ picture }, index) => {
                    const opacityStyle = useAnimatedStyle(() => ({
                        opacity: interpolate(
                            x.value,
                            [
                                (index - 0.5) * width,
                                index * width,
                                (index + 0.5) * width,
                            ],
                            [0, 1, 0],
                            Extrapolate.CLAMP
                        ),
                    }));

                    return (
                        <Animated.View
                            style={[styles.underlay, opacityStyle]}
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
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                >
                    {slides.map(({ title }, index) => (
                        <Slide
                            key={index}
                            right={index % 2 !== 0}
                            title={title}
                        />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View
                    style={[StyleSheet.absoluteFillObject, backgroundStyle]}
                />
                <View style={styles.footerContent}>
                    <View style={styles.pagination}>
                        {slides.map((_, index) => (
                            <Dot
                                key={index}
                                currentIndex={currentIndex}
                                index={index}
                            />
                        ))}
                    </View>
                    <Animated.View
                        style={[
                            {
                                width: width * slides.length,
                                flex: 1,
                                flexDirection: "row",
                                marginTop: 20,
                            },
                            footerStyle,
                        ]}
                    >
                        {slides.map(({ subtitle, description }, index) => {
                            const last = index === slides.length - 1;
                            const onPress = () => {
                                if (last) {
                                    navigation.navigate("Welcome");
                                } else {
                                    scrollRef.current?.getNode().scrollTo({
                                        x: width * (index + 1),
                                        animated: true,
                                    });
                                }
                            };

                            return (
                                <SubSlide
                                    key={index}
                                    subtitle={subtitle}
                                    description={description}
                                    onPress={onPress}
                                    last={last}
                                />
                            );
                        })}
                    </Animated.View>
                </View>
            </View>
        </View>
    );
};

export default Onboarding;

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
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
        backgroundColor: theme.colors.background,
        borderTopLeftRadius: theme.borderRadii.xl,
    },
}));
