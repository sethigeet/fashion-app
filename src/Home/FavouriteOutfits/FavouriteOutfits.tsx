import React, { useRef, useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import {
    Box,
    Header,
    HomeNavigationProps,
    useTheme,
    TopRightCurve,
} from "../../components";

import {
    Transition,
    Transitioning,
    TransitioningView,
} from "react-native-reanimated";

import Outfit from "./Outfit";
import Footer from "./Footer";

const { width } = Dimensions.get("window");

const defaultOutfits = [
    {
        id: 1,
        color: "#BFEAF5",
        aspectRatio: 1,
        selected: false,
    },
    {
        id: 2,
        color: "#BEECC4",
        aspectRatio: 200 / 145,
        selected: false,
    },
    {
        id: 3,
        color: "#FFE4D9",
        aspectRatio: 180 / 145,
        selected: false,
    },
    {
        id: 4,
        color: "#FFDDDD",
        aspectRatio: 180 / 145,
        selected: false,
    },
    {
        id: 5,
        color: "#BFEAF5",
        aspectRatio: 1,
        selected: false,
    },
    {
        id: 6,
        color: "#F3F0Ef",
        aspectRatio: 120 / 145,
        selected: false,
    },
    {
        id: 7,
        color: "#D5C3BB",
        aspectRatio: 210 / 145,
        selected: false,
    },
    {
        id: 8,
        color: "#DEEFC4",
        aspectRatio: 160 / 145,
        selected: false,
    },
];

const FavouriteOutfits = ({
    navigation,
}: HomeNavigationProps<"FavouriteOutfits">) => {
    const [outfits, setOutfits] = useState(defaultOutfits);
    const [footerHeight, setFooterHeight] = useState(0);
    const { spacing } = useTheme();
    const CARD_WIDTH = (width - spacing.s * 2) / 2 - spacing.l;

    const transition = (
        <Transition.Together>
            <Transition.Change interpolation="easeInOut" durationMs={1000} />
        </Transition.Together>
    );
    const list = useRef<TransitioningView>(null);

    return (
        <Box flex={1} bg="background">
            <Header
                left={{
                    icon: "menu",
                    onPress: () => navigation.openDrawer(),
                }}
                right={{ icon: "shopping-bag", onPress: () => {} }}
                title="Favourite Outfits"
                iconBackground="lightGrey"
            />
            <ScrollView>
                <Transitioning.View ref={list} transition={transition}>
                    <Box
                        flexDirection="row"
                        p="l"
                        style={{ marginBottom: footerHeight }}
                    >
                        <Box mr="s">
                            {outfits
                                .filter(({ id }) => id % 2 !== 0)
                                .map((outfit) => (
                                    <Outfit
                                        key={outfit.id}
                                        width={CARD_WIDTH}
                                        outfit={outfit}
                                    />
                                ))}
                        </Box>
                        <Box ml="s">
                            {outfits
                                .filter(({ id }) => id % 2 === 0)
                                .map((outfit) => (
                                    <Outfit
                                        key={outfit.id}
                                        width={CARD_WIDTH}
                                        outfit={outfit}
                                    />
                                ))}
                        </Box>
                    </Box>
                </Transitioning.View>
            </ScrollView>
            <TopRightCurve footerHeight={footerHeight} color="secondary" />
            <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                onLayout={({
                    nativeEvent: {
                        layout: { height },
                    },
                }) => setFooterHeight(height)}
            >
                <Footer
                    label="Remove from favourites"
                    onPress={() => {
                        list.current?.animateNextTransition();
                        setOutfits((prevOutfits) =>
                            prevOutfits.filter(
                                (prevOutfit) => !prevOutfit.selected
                            )
                        );
                    }}
                />
            </Box>
        </Box>
    );
};

export default FavouriteOutfits;
