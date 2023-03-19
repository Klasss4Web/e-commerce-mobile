import React from "react";
import { Box, Button, HStack, Pressable, ScrollView, Text } from "native-base";
import { Colors } from "../../color";

const Orders = () => {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems={"center"}
            bg={Colors.deepGray}
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              4353546352627273
            </Text>
            <Text fontSize={11} italic bold color={Colors.black}>
              PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black}>
              Jan 22, 2023
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              $100
            </Button>
          </HStack>
        </Pressable>
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems={"center"}
            bg={Colors.white}
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              4353546352627273
            </Text>
            <Text fontSize={11} italic bold color={Colors.black}>
              NOT PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black}>
              Jan 22, 2023
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.red}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                bg: Colors.red,
              }}
            >
              $100
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Orders;
