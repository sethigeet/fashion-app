import React, { useState } from "react";
import { sub } from "react-native-reanimated";
import { useTransition } from "react-native-redash";

import { Box, Header, HomeNavigationProps } from "../../components";

import Background from "./Background";
import Card from "./Card";
import Categories from "./Categories";

const cards = [
    {
        index: 3,
        picture: require("../../Authentication/assets/1.png"),
    },
    {
        index: 2,
        picture: require("../../Authentication/assets/2.png"),
    },
    {
        index: 1,
        picture: require("../../Authentication/assets/3.png"),
    },
    {
        index: 0,
        picture: require("../../Authentication/assets/4.png"),
    },
];

const step = 1 / (cards.length - 1);

const OutfitIdeas = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const aIndex = useTransition(currentIndex);

    return (
        <Box flex={1} bg="background">
            <Header
                left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
                right={{ icon: "shopping-bag", onPress: () => {} }}
                title="Outifit Ideas"
            />
            <Categories />
            <Box flex={1}>
                <Background />
                {cards.map(
                    ({ index, picture }) =>
                        (index + 1) * step > currentIndex && (
                            <Card
                                key={index}
                                position={sub(index * step, aIndex)}
                                onSwipe={() =>
                                    setCurrentIndex(
                                        (prevIndex) => prevIndex + step
                                    )
                                }
                                picture={picture}
                                step={step}
                            />
                        )
                )}
            </Box>
        </Box>
    );
};

export default OutfitIdeas;
