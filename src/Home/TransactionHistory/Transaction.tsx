import React from "react";
import { Box, Text } from "../../components";

import { Transaction as TransactionType } from "./Graph/Graph";
import { getFullDate } from "./Graph/UtitlityFn";

interface Props {
    transaction: TransactionType;
}

const Transaction = ({ transaction }: Props) => {
    const SIZE = 8;
    return (
        <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            my="s"
        >
            <Box>
                <Box flexDirection="row" alignItems="center">
                    <Box
                        bg={transaction.color}
                        style={{
                            width: SIZE,
                            height: SIZE,
                            borderRadius: SIZE / 2,
                        }}
                        mr="s"
                    />
                    <Box>
                        <Text variant="title3">#{transaction.id}</Text>
                    </Box>
                </Box>
                <Box flexDirection="row">
                    <Text
                        color="darkGrey"
                        fontSize={13}
                        fontFamily="SFProDisplay-Medium"
                    >
                        ${transaction.value}
                    </Text>
                    <Text
                        color="darkGrey"
                        fontSize={13}
                        fontFamily="SFProDisplay-Medium"
                    >
                        {" "}
                        -{" "}
                    </Text>
                    <Text
                        color="darkGrey"
                        fontSize={13}
                        fontFamily="SFProDisplay-Medium"
                    >
                        {getFullDate(transaction.date)}
                    </Text>
                </Box>
            </Box>
            <Box>
                <Text variant="buttonText">See More</Text>
            </Box>
        </Box>
    );
};

export default Transaction;
