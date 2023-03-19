import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { Colors } from "../color";
import CustomBtn from "./CustomBtn";
import Messages from "./Notifications/Messages";
import Rating from "./Rating";

const Review = () => {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      <Messages
        color={Colors.main}
        bg={Colors.deepGray}
        bold
        children={"NO REVIEW"}
      />
      <Box p={3} bg={Colors.deepestGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Doe
        </Heading>
        <Rating value={5} />
        <Text mb={3} fontSize={11} my={2}>
          Jan 12, 2023
        </Text>
        <Messages
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            "Find Men's Hoodies and Sweatshirts On Sale at adidas today! The only place to shop for comfortable and stylish hoodies and sweatshirts up to 40% Off."
          }
        />
      </Box>
      <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          DROP A REVIEW FOR THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Rating
            </FormControl.Label>
            {/* <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Choose Rating Value"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={3} />,
              }}
              selectedValue={ratings}
              onValueChange={(item) => setRatings(item)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
              <Select.Item label="4 - V Good" value="4" />
              <Select.Item label="5 - Excellent" value="5" />
            </Select> */}
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              placeholder="his product is superb..."
              borderWidth={0}
              bg={Colors.subGreen}
              py={2}
              _focus={{
                bg: Colors.subGreen
              }}
            />
          </FormControl>
          <CustomBtn bg={Colors.main} color={Colors.white}>
            SUBMIT
          </CustomBtn>
          <Messages
            color={Colors.white}
            bg={Colors.black}
            children={
              "Please Login to write a review."
            }
          />
        </VStack>
      </Box>
    </Box>
  );
};

export default Review;
