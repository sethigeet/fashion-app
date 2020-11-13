import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "../../components";
import { Text } from "../../components";

interface Props {
    subtitle: string;
    description: string;
    last?: boolean;
    onPress: () => void;
}

const SubSlide = ({ subtitle, description, last, onPress }: Props) => {
    return (
        <View style={styles.container}>
            <Text variant="title2" mb="s" textAlign="center">
                {subtitle}
            </Text>
            <Text variant="body" mb="xl" textAlign="center">
                {description}
            </Text>
            <Button
                label={last ? "Let's Get Started" : "Next"}
                variant={last ? "primary" : "default"}
                {...{ onPress }}
            />
        </View>
    );
};

export default SubSlide;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 44,
    },
});
