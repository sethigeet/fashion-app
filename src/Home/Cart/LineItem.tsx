import React from "react";
import { Box, Text } from "../../components";

export interface LineItemModel {
    id: number;
    label: string;
    subLabel?: string;
    amount: number;
}

interface Props {
    data: LineItemModel;
}

const LineItem = ({ data: { label, subLabel, amount } }: Props) => {
    return (
        <Box flexDirection="row" alignItems="center" pb="m">
            <Box flexDirection="row" flex={1} alignItems="center">
                <Text variant="title3" color="background">
                    {label}
                    {subLabel && (
                        <Text style={{ color: "#555671" }}> {subLabel}</Text>
                    )}
                </Text>
            </Box>
            <Box>
                <Text variant="title3" color="primary">
                    ${amount.toFixed(2)}
                </Text>
            </Box>
        </Box>
    );
};

export default LineItem;
