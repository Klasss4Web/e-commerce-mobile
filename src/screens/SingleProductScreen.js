import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Heading,
  HStack,
  Image,
  ScrollView,
  Spacer,
  Text,
} from "native-base";
import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import { Colors } from "../color";
import CustomBtn from "../components/CustomBtn";
import Rating from "../components/Rating";
import Review from "../components/Review";

const SingleProductScreen = ({ route }) => {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.image }}
          w="full"
          h={300}
          resizeMode="contain"
          alt="image"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product?.name}
        </Heading>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <HStack space={2} alignItems="center" my={5}>
          {product.countInStock > 0 ? (
            <NumericInput
              value={value}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              maxValue={product.countInStock}
              minValue={0}
              borderColor={Colors.deepGray}
              rounded
              textColor={Colors.black}
              iconStyle={{ color: Colors.white }}
              rightButtonBackgroundColor={Colors.main}
              leftButtonBackgroundColor={Colors.main}
              onChange={() => console.log("Logged")}
            />
          ) : (
            <Heading bold color={Colors.red} fontSize={12} italic>
              Out of stock
            </Heading>
          )}

          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            ${product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {product.description}
        </Text>
        <CustomBtn
          bg={Colors.main}
          color={Colors.white}
          mt={10}
          onPress={() => navigation.navigate("Cart")}
        >
          ADD TO CART
        </CustomBtn>
        <Review />
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;
