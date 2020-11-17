import React from "react";
import { ScrollView, View } from "react-native";
import { useTheme } from "../../components";

import Category from "./Category";

const categories = [
    {
        id: "newin",
        title: "New In",
        color: "#FFE8E9",
    },
    {
        id: "summer",
        title: "Summer",
        color: "#BEECC4",
    },
    {
        id: "activewear",
        title: "Active Wear",
        color: "#BFEAF5",
    },
    {
        id: "outlet",
        title: "Outlet",
        color: "#F1E0FF",
    },
    {
        id: "accessories",
        title: "Accessories",
        color: "#FFE8E9",
    },
];

const Categories = () => {
    const { spacing } = useTheme();

    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: spacing.m }}
            >
                {categories.map((category) => (
                    <Category key={category.id} category={category} />
                ))}
            </ScrollView>
        </View>
    );
};

export default Categories;
