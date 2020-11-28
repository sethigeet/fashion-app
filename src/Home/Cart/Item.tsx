import React from "react";

import { Box, Text, useTheme } from "../../components";
import SwipableRow from "./SwipableRow";

export interface ShoppingCartItem {
    id: number;
    name: string;
    color: string;
    price: number;
    quantity: number;
    size: string;
}

interface Props {
    item: ShoppingCartItem;
    onRemove: () => void;
    increaseQuantity: () => void;
    decreaseQuantity: () => void;
}

const Item = ({
    item: { name, color, price, quantity, size },
    onRemove,
    increaseQuantity,
    decreaseQuantity,
}: Props) => {
    const theme = useTheme();
    const itemHeight = 120 + theme.spacing.l * 2;
    return (
        <SwipableRow
            onRemove={onRemove}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            itemHeight={itemHeight}
        >
            <Box p="l" flexDirection="row" alignItems="center">
                <Box flex={1} flexDirection="row" alignItems="center">
                    <Box
                        width={120}
                        height={120}
                        style={{ backgroundColor: color }}
                        opacity={0.6}
                        borderRadius="m"
                    />
                    <Box flex={1} p="m">
                        <Text
                            variant="header"
                            fontFamily="SFProDisplay-Regular"
                        >
                            Size:{" "}
                            <Text
                                variant="header"
                                fontFamily="SFProDisplay-Regular"
                                color="primary"
                                fontWeight="bold"
                            >
                                {size}
                            </Text>
                        </Text>
                        <Text variant="title3" my="s">
                            {name}
                        </Text>
                        <Text variant="title3" fontSize={18} color="primary">
                            ${price}
                        </Text>
                    </Box>
                </Box>
                <Box>
                    <Box
                        bg="secondary"
                        p="s"
                        borderRadius="l"
                        width={40}
                        height={40}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text color="background" fontWeight="bold">
                            x{quantity}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </SwipableRow>
    );
};

export default Item;
