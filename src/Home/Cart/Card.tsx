import React from "react";
import { Box, Text, Theme } from "../../components";

import CardLayout from "./CardLayout";
import { Visa, MasterCard } from "./Logos";

export enum CardTypes {
    VISA,
    MASTERCARD,
}

export interface CardModel {
    id: number;
    type: CardTypes;
    last4Digits: number;
    expirationDate: string;
}

interface Props {
    card: CardModel;
    selected: boolean;
    onSelect: () => void;
}

const Card = ({
    card: { expirationDate, last4Digits, type },
    onSelect,
    selected,
}: Props) => {
    const backgroundColor: keyof Theme["colors"] = selected
        ? "primary"
        : "background";
    const color: keyof Theme["colors"] = selected ? "background" : "text";
    return (
        <CardLayout onPress={onSelect} backgroundColor={backgroundColor}>
            <Box flex={1} p="s">
                <Box>
                    {type === CardTypes.VISA ? (
                        <Visa size={32.5} />
                    ) : (
                        <MasterCard size={32.5} />
                    )}
                </Box>
                <Box>
                    <Text
                        variant="title3"
                        fontFamily="SFProDisplay-Bold"
                        color={color}
                    >
                        ***** {last4Digits}
                    </Text>
                </Box>
                <Box>
                    <Text color={color} opacity={0.5} fontSize={10}>
                        Expiration
                    </Text>
                    <Text
                        variant="title3"
                        fontFamily="SFProDisplay-Bold"
                        color={color}
                        style={{ marginTop: -3 }}
                    >
                        {expirationDate}
                    </Text>
                </Box>
                <Box></Box>
            </Box>
        </CardLayout>
    );
};

export default Card;
