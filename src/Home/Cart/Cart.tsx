import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg";

import {
    aspectRatio,
    Box,
    Header,
    HomeNavigationProps,
    Text,
    useTheme,
} from "../../components";

import CartContainer from "./CartContainer";
import Checkout from "./Checkout";
import Item, { ShoppingCartItem } from "./Item";

const height = 100 * aspectRatio;

const d = "M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 Z";

const defaultItems: ShoppingCartItem[] = [
    {
        id: 1,
        size: "M, L",
        name: "Short Sleeve Organic Top",
        price: 29.99,
        color: "#FFF7C0",
        quantity: 2,
    },
    {
        id: 2,
        size: "M, L",
        name: "Crew Neck Sweatshirt",
        price: 29.99,
        color: "#BFEAF5",
        quantity: 2,
    },
    {
        id: 3,
        size: "M, L",
        name: "No Broken Hearts Shirt",
        price: 29.99,
        color: "#FEE6E9",
        quantity: 2,
    },
    {
        id: 4,
        size: "M, L",
        name: "Short Sleeve Organic Top",
        price: 29.99,
        color: "#FFF7C0",
        quantity: 2,
    },
    {
        id: 5,
        size: "M, L",
        name: "Crew Neck Sweatshirt",
        price: 29.99,
        color: "#BFEAF5",
        quantity: 2,
    },
    {
        id: 6,
        size: "M, L",
        name: "No Broken Hearts Shirt",
        price: 29.99,
        color: "#FEE6E9",
        quantity: 2,
    },
];

const Cart = ({ navigation }: HomeNavigationProps<"Cart">) => {
    const theme = useTheme();
    const [items, setItems] = useState(defaultItems);

    return (
        <CartContainer CheckoutComponent={Checkout}>
            <Box bg="primary">
                <Header
                    left={{
                        icon: "arrow-left",
                        onPress: () => navigation.goBack(),
                    }}
                    right={{ icon: "share", onPress: () => {} }}
                    title="Shopping Cart"
                    color="background"
                    iconBackground="primary"
                />
            </Box>
            <Box flex={1}>
                <ScrollView
                    style={{
                        borderBottomLeftRadius: theme.borderRadii.xl,
                        borderBottomRightRadius: theme.borderRadii.xl,
                    }}
                    contentContainerStyle={{
                        paddingVertical: height / 2,
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {items.map((item) => (
                        <Item
                            key={item.id}
                            item={item}
                            onRemove={() =>
                                setItems((prevItems) => {
                                    const newItems = [...prevItems];
                                    newItems.splice(newItems.indexOf(item), 1);
                                    return newItems;
                                })
                            }
                            increaseQuantity={() =>
                                setItems((prevItems) => {
                                    const newItems = [...prevItems];
                                    newItems[newItems.indexOf(item)].quantity =
                                        newItems[newItems.indexOf(item)]
                                            .quantity + 1;
                                    return newItems;
                                })
                            }
                            decreaseQuantity={() =>
                                setItems((prevItems) => {
                                    const newItems = [...prevItems];
                                    newItems[newItems.indexOf(item)].quantity =
                                        newItems[newItems.indexOf(item)]
                                            .quantity - 1;
                                    return newItems;
                                })
                            }
                        />
                    ))}
                </ScrollView>
                <Box
                    height={height}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                    }}
                >
                    <Svg
                        style={StyleSheet.absoluteFillObject}
                        viewBox="0 0 375 100"
                    >
                        <Path d={d} fill={theme.colors.primary} />
                    </Svg>
                    <Text
                        variant="title2"
                        color="background"
                        textAlign="center"
                        mt="s"
                    >
                        3 Items Added
                    </Text>
                </Box>
            </Box>
        </CartContainer>
    );
};

export default Cart;
