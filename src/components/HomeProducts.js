import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Flex,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import React from "react";
import { Colors } from "../color";
import { products } from "../data/products";
import Rating from "./Rating";

const HomeProducts = () => {
  const navigation = useNavigation();
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap={"wrap"}
        direction="row"
        justifyContent={"space-between"}
        px={6}
      >
        {products.map((product) => (
          <Pressable
            key={product?._id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden"
            onPress={() => navigation.navigate("Single", product)}
          >
            <Image
              source={{ uri: product?.image }}
              alt={product.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Heading size="sm" semibold>
                ${product?.price}
              </Heading>
              <Text fontSize={10} mt={1} isTruncated w="full">
                {product?.name}
              </Text>
              <Rating value={product?.rating} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
};

export default HomeProducts;
