import React from "react";
import { Dimensions, StyleSheet } from "react-native";

import { Box, Header, HomeNavigationProps, Text } from "../../components";

import Tabs, { Tab } from "./Tabs";
import Configuration from "./Configuration";
import PersonalInfo from "./PersonalInfo";

const { width } = Dimensions.get("window");

const tabs: Tab[] = [
    {
        id: "configuration",
        label: "Configuration",
    },
    {
        id: "personalinfo",
        label: "Personal Info",
    },
];

const EditProfile = ({ navigation }: HomeNavigationProps<"EditProfile">) => {
    return (
        <Box flex={1} bg="background">
            <Box flex={0.2} bg="background">
                <Box
                    style={StyleSheet.absoluteFillObject}
                    borderBottomRightRadius="xl"
                    bg="secondary"
                >
                    <Header
                        left={{
                            icon: "menu",
                            onPress: () => navigation.openDrawer(),
                        }}
                        title="Edit Profile"
                        iconBackground="secondary"
                        color="background"
                    />
                </Box>
            </Box>
            <Box flex={0.8}>
                <Box flex={1} bg="secondary" />
                <Box
                    bg="background"
                    borderTopLeftRadius="xl"
                    pt="xl"
                    style={StyleSheet.absoluteFillObject}
                >
                    <Box
                        position="absolute"
                        left={(width - 100) / 2}
                        right={0}
                        top={-50}
                        bg="primary"
                        height={100}
                        width={100}
                        style={{ borderRadius: 50 }}
                        alignSelf="center"
                    />
                    <Box style={{ marginTop: 15 }}>
                        <Text variant="title1" textAlign="center">
                            Mike Peter
                        </Text>
                        <Text variant="body" textAlign="center">
                            mike@flexinstudios.com
                        </Text>
                    </Box>
                    <Box flex={1}>
                        <Tabs tabs={tabs}>
                            <Configuration />
                            <PersonalInfo />
                        </Tabs>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default EditProfile;
