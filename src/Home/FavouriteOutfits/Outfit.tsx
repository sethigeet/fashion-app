import React, { useState } from "react";

import { Box, RoundedIcon, BorderlessTap } from "../../components";

interface Props {
    outfit: {
        id: number;
        color: string;
        aspectRatio: number;
        selected: boolean;
    };
    width: number;
}

const Outfit = ({ outfit, width }: Props) => {
    const [selected, setSelected] = useState(false);

    return (
        <BorderlessTap
            onPress={() => {
                setSelected((prev) => {
                    outfit.selected = !prev;
                    return !prev;
                });
            }}
        >
            <Box
                my="s"
                borderRadius="m"
                style={{
                    backgroundColor: outfit.color,
                    width,
                    height: width * outfit.aspectRatio,
                }}
                alignItems="flex-end"
                p="s"
            >
                {selected && (
                    <RoundedIcon
                        name="check"
                        backgroundColor="primary"
                        color="background"
                        size={25}
                    />
                )}
            </Box>
        </BorderlessTap>
    );
};

export default Outfit;
