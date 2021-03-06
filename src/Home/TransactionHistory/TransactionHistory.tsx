import React from "react";
import { Dimensions, ScrollView } from "react-native";

import {
    Box,
    Header,
    HomeNavigationProps,
    Text,
    ScrollableContent,
    useTheme,
} from "../../components";

import Graph, { DataPoint } from "./Graph";
import Transaction from "./Transaction";

const { height } = Dimensions.get("window");
const footerHeight = height * 0.12;

const minDate = new Date("2019-09-01").getTime();
const maxDate = new Date("2020-03-01").getTime();
const data: DataPoint[] = [
    {
        id: 123457,
        date: new Date("2019-09-01").getTime(),
        value: 139.42,
        color: "graph1",
    },
    {
        id: 123463,
        date: new Date("2019-10-01").getTime(),
        value: 198.54,
        color: "graph2",
    },
    {
        id: 123458,
        date: new Date("2019-11-01").getTime(),
        value: 139.42,
        color: "graph3",
    },
    {
        id: 123459,
        date: new Date("2019-12-01").getTime(),
        value: 281.23,
        color: "graph4",
    },
    {
        id: 123462,
        date: new Date("2020-01-01").getTime(),
        value: 198.54,
        color: "graph5",
    },
    {
        id: 123461,
        date: new Date("2020-02-01").getTime(),
        value: 198.54,
        color: "graph6",
    },
];

const TransactionHistory = ({
    navigation,
}: HomeNavigationProps<"TransactionHistory">) => {
    const theme = useTheme();

    return (
        <ScrollableContent>
            <Box flex={1} bg="background">
                <Header
                    title="Transaction History"
                    left={{
                        icon: "menu",
                        onPress: () => navigation.openDrawer(),
                    }}
                    right={{ icon: "share", onPress: () => {} }}
                />
                <Box p="l" pb="s">
                    <Box
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="flex-end"
                    >
                        <Box>
                            <Text
                                variant="header"
                                color="secondary"
                                opacity={0.3}
                                textTransform="uppercase"
                            >
                                Total Spent
                            </Text>
                            <Text variant="title1">$619,19</Text>
                        </Box>
                        <Box bg="primaryLight" borderRadius="m" p="s">
                            <Text variant="buttonText" color="primary">
                                All Time
                            </Text>
                        </Box>
                    </Box>
                    <Box mt="xl" mb="m">
                        <Graph
                            data={data}
                            minDate={minDate}
                            maxDate={maxDate}
                        />
                    </Box>
                </Box>
                <ScrollView
                    contentContainerStyle={{
                        paddingBottom: footerHeight,
                        paddingHorizontal: theme.spacing.l,
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {data.map((transaction) => (
                        <Transaction
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))}
                    {data.map((transaction) => (
                        <Transaction
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))}
                    {data.map((transaction) => (
                        <Transaction
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))}
                </ScrollView>
            </Box>
        </ScrollableContent>
    );
};

export default TransactionHistory;
