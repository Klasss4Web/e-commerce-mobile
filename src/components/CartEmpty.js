import React from "react";
import { Box, Center, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../color";
import CustomBtn from "./CustomBtn";

const CartEmpty = () => {
  return (
    <Box flex={1} px={4}>
      <Center h="90%">
        <Center w={200} h={200} bg={Colors.white} rounded="full">
          <FontAwesome name="shopping-basket" size={64} color={Colors.main} />
        </Center>
        <Text color={Colors.main} bold mt={5}>CART IS EMPTY</Text>
      </Center>
      <CustomBtn bg={Colors.black} color={Colors.white}>START SHOPPING</CustomBtn>
    </Box>
  );
};

export default CartEmpty;
