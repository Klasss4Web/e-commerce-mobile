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
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
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
        <Heading>LOGIN</Heading>
        <VStack space={5} pt="6">
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={24} color={Colors.main} />
            }
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
          LOGIN
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
          <Text color={Colors.white}>SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default LoginScreen;
