import React from "react";
import {
  Box,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { Colors } from "../color";
import CustomBtn from "../components/CustomBtn";
import { useNavigation } from "@react-navigation/native";

const ShippingInputs = [
  {
    label: "ENTER CITY",
    type: "text",
  },
  {
    label: "ENTER COUNTRY",
    type: "text",
  },
  {
    label: "ENTER POSTAL CODE",
    type: "text",
  },
  {
    label: "ENTER ADDRESS",
    type: "text",
  },
];
const ShippingScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} justifyContent={"center"} bg={Colors.main} py={5} safeArea>
      <Center pb={5}>
        <Text color={Colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((input, key) => (
              <FormControl key={key}>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {input.label}
                </FormControl.Label>
                <Input
                  type={input.type}
                  borderWidth={0.2}
                  borderColor={Colors.main}
                  bg={Colors.subGreen}
                  py={2}
                  color={Colors.main}
                  _focus={{
                    bg: Colors.subGreen,
                    borderWidth: 1,
                    borderColor: Colors.main,
                  }}
                />
              </FormControl>
            ))}
            <CustomBtn
              bg={Colors.main}
              color={Colors.white}
              mt={5}
              onPress={() => navigation.navigate("Checkout")}
            >
              CONTINUE
            </CustomBtn>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ShippingScreen;
