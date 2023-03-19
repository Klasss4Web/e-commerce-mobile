import React from "react";
import {
  Box,
  Center,
  FormControl,
  HStack,
  Image,
  Input,
  ScrollView,
  Spacer,
  Text,
  VStack,
} from "native-base";
import { Colors } from "../color";
import CustomBtn from "../components/CustomBtn";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PaymentScreen = () => {
  const navigation = useNavigation();
  const paymentMethods = [
    {
      image: require("../../assets/paypal.png"),
      alt: "paypal",
      icon: "Ionicons",
    },
    {
      image: require("../../assets/paystack.png"),
      alt: "paystack",
      icon: "fontAwesome",
    },
    {
      image: require("../../assets/gpay.png"),
      alt: "googlepay",
      icon: "fontAwesome",
    },
  ];
  return (
    <Box flex={1} justifyContent={"center"} bg={Colors.main} py={5} safeArea>
      <Center pb={5}>
        <Text color={Colors.white} fontSize={14} bold>
          PAYMENT METHOD
        </Text>
      </Center>
      <Box h="full" bg={Colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethods.map((method, key) => (
              <HStack
                key={key}
                alignItems={"center"}
                bg={Colors.white}
                px={3}
                py={1}
                justifyContent="space-between"
                rounded={10}
              >
                <Box>
                  <Image
                    source={method.image}
                    resizeMode="contain"
                    alt="paypal logo"
                    w={60}
                    h={50}
                  />
                  {/* <Spacer /> */}
                </Box>
                {method.icon === "Ionicons" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={30}
                    color={Colors.main}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={30}
                    color={Colors.main}
                  />
                )}
              </HStack>
            ))}

            <CustomBtn bg={Colors.main} color={Colors.white} mt={5} onPress={() => navigation.navigate("PlaceOrder")}>
              CONTINUE
            </CustomBtn>
            <Text italic textAlign={"center"}>
              Payment method is <Text bold>Paypal</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default PaymentScreen;
