import React from "react";
import { Box, Button, Center, Image, VStack } from "native-base";
import { Colors } from "../color";
import CustomBtn from "../components/CustomBtn";

const NotVerifiedScreen = () => {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image
          source={require("../../assets/loginBg.jpg")}
          alt="logo"
          size="lg"
          borderRadius={50}
          // w={100}
          // h={100}
        />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <CustomBtn bg={Colors.black} color={Colors.white}>
          REGISTER
        </CustomBtn>
        <CustomBtn bg={Colors.white} color={Colors.black}>
          LOG IN
        </CustomBtn>
      </VStack>
    </Box>
  );
};

export default NotVerifiedScreen;
