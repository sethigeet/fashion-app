import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Button, Text, useTheme } from "../../components";

import Card, { CardModel, CardTypes } from "./Card";
import AddCard from "./AddCard";
import LineItem, { LineItemModel } from "./LineItem";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface Props {
    minHeight: number;
}

const cards: CardModel[] = [
    {
        id: 0,
        type: CardTypes.VISA,
        last4Digits: 5467,
        expirationDate: "05/24",
    },
    {
        id: 1,
        type: CardTypes.MASTERCARD,
        last4Digits: 2620,
        expirationDate: "01/26",
    },
    {
        id: 2,
        type: CardTypes.VISA,
        last4Digits: 1234,
        expirationDate: "12/20",
    },
];

const lineItems: LineItemModel[] = [
    {
        id: 0,
        label: "Total Items",
        subLabel: "(6)",
        amount: 180.94,
    },
    {
        id: 1,
        label: "Standard Delivery",
        amount: 12.0,
    },
    {
        id: 2,
        label: "Total Payment",
        amount: 192.94,
    },
];

const Checkout = ({ minHeight }: Props) => {
    const theme = useTheme();
    const [selectedCard, setSelectedCard] = useState(cards[0].id);
    return (
        <Box flex={1} bg="secondary" style={{ paddingTop: minHeight }}>
            <Box py="m">
                <Box>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingRight: theme.spacing.m,
                        }}
                    >
                        <AddCard />
                        {cards.map((card) => (
                            <Card
                                key={card.id}
                                card={card}
                                selected={selectedCard === card.id}
                                onSelect={() => setSelectedCard(card.id)}
                            />
                        ))}
                    </ScrollView>
                </Box>
                <Box m="m" mt="xl">
                    <Text variant="title3" color="background">
                        Delivery address
                    </Text>
                    <Box mt="s" flexDirection="row" alignItems="center">
                        <Box flex={1}>
                            <Text
                                variant="placeholder"
                                color="background"
                                opacity={0.7}
                            >
                                Unit 15, York Farm Buisness Center,
                            </Text>
                            <Text
                                variant="placeholder"
                                color="background"
                                opacity={0.7}
                            >
                                Watling St., Towcester
                            </Text>
                        </Box>
                        <Text
                            variant="placeholder"
                            fontFamily="SFProDisplay-Medium"
                            color="background"
                            opacity={0.3}
                        >
                            Change
                        </Text>
                    </Box>
                    <Box mt="xl">
                        {lineItems.map((item) => (
                            <LineItem key={item.id} data={item} />
                        ))}
                    </Box>
                </Box>
                <Box flex={1} justifyContent="flex-end" alignItems="center">
                    <Button
                        variant="primary"
                        label={`Press to Pay $${
                            lineItems[lineItems.length - 1].amount
                        }`}
                        onPress={() => {}}
                        alignSelf="center"
                        style={{ width: width - theme.spacing.m * 2 }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Checkout;
