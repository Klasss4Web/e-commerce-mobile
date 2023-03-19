import React from "react";
import { Box, FormControl, Input, ScrollView, VStack } from "native-base";
import { Colors } from "../../color";
import CustomBtn from "../CustomBtn";

const Profile = () => {
  const Inputs = [
    {
      label: "USERNAME",
      type: "text",
    },
    {
      label: "EMAIL",
      type: "email",
    },
    {
      label: "NEW PASSWORD",
      type: "password",
    },
    {
      label: "CONFIRM PASSWORD",
      type: "password",
    },
  ];
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((input, key) => (
            <FormControl
              key={key}
              _text={{ fontSize: "12px", fontWeight: "bold" }}
            >
              <FormControl.Label>{input.label}</FormControl.Label>
              <Input
                type={input.type}
                borderWidth={0.5}
                bg={Colors.subGreen}
                borderColor={Colors.main}
                py={2}
                color={Colors.main}
                fontSize={15}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              />
            </FormControl>
          ))}
          <CustomBtn bg={Colors.main} color={Colors.white}>
            UPDATE PROFILE
          </CustomBtn>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
