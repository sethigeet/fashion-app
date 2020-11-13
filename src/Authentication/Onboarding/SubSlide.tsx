import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../components";

interface Props {
    subtitle: string;
    description: string;
    last?: boolean;
    onPress: () => void;
}

const SubSlide = ({ subtitle, description, last, onPress }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.description}>{description}</Text>
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
    subtitle: {
        fontFamily: "SFProText-SemiBold",
        fontSize: 24,
        lineHeight: 30,
        marginBottom: 12,
        color: "#0C0D34",
        textAlign: "center",
    },
    description: {
        fontFamily: "SFProText-Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "#0C0D34",
        textAlign: "center",
        marginBottom: 40,
    },
});
