import React from "react";
import { Box, Center, Heading, Text } from "native-base";
import { Colors } from "../color";
import { Ionicons } from "@expo/vector-icons";
import  ProfileTabs  from "../components/profile/ProfileTabs";

const ProfileScreen = () => {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Ionicons name="person-circle-outline" size={80} color={Colors.white} />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Admin Derek
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined Mar 10, 2023
        </Text>
      </Center>
      <ProfileTabs />
    </>
  );
};

export default ProfileScreen;
