import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import React from "react";
import { Colors } from "../color";
import CartEmpty from "../components/CartEmpty";
import CartItems from "../components/CartItems";
import CustomBtn from "../components/CustomBtn";

const CartScreen = () => {

  const navigation = useNavigation()
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      <Center W="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          CART
        </Text>
      </Center>
      {/* <CartEmpty /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text>Total</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{ color: Colors.white, fontWeight: "semibold" }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              $365
            </Button>
          </HStack>
        </Center>
        <Center px={5}>
          <CustomBtn bg={Colors.black} color={Colors.white} mt={10} onPress={() => navigation.navigate("Shipping")}>
            CHECKOUT
          </CustomBtn>
        </Center>
      </ScrollView>
    </Box>
  );
};

export default CartScreen;
