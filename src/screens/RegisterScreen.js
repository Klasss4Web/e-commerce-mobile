import {
  Box,
  Image,
  Heading,
  VStack,
  Input,
  Button,
  Text,
  Pressable,
} from "native-base";
import React from "react";
import { Colors } from "../color";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";

const RegisterScreen = ({ navigation }) => {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Background logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/loginBg.jpg")}
      />
      <Box
        w="full"
        h="full"
        position={"absolute"}
        top="0"
        px="6"
        justifyContent={"center"}
      >
        <Heading>SIGN UP</Heading>
        <VStack space={5} pt="6">
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={24} color={Colors.main} />
            }
            variant="underlined"
            placeholedr="Jane Doe"
            w="70%"
            pl={2}
            color={Colors.main}
            type="text"
            borderBottomColor={Colors.main}
          />
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={24} color={Colors.main} />
            }
            type="email"
            variant="underlined"
            placeholedr="user@gmail.com"
            w="70%"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.main}
          />

          <Input
            InputLeftElement={
              <Ionicons name="eye" size={24} color={Colors.main} />
            }
            variant="underlined"
            type="password"
            placeholedr="***********"
            w="70%"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.main}
          />
        </VStack>
        <Button
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          _pressed={{
            bg: Colors.main,
          }}
          onPress={() => navigation.navigate("Bottom")}
        >
          SIGN UP
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.white}>LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default RegisterScreen;
