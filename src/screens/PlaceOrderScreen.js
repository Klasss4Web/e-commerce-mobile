import { Box, Heading, ScrollView } from "native-base";
import React from "react";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Colors } from "../color";
import OrderInfo from "../components/OrderInfo";
import OrderItem from "../components/OrderItem";
import PlaceOrderModel from "../components/PlaceOrderModel";

const PlaceOrderScreen = () => {
  return (
    <Box bg={Colors.subGreen} flex={1} safeAreaTop pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subTitle={"Admin Derek"}
            text="admin@admin.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="SHIPPING INFO"
            subTitle={"Shipping: Nigeria"}
            text="Pay Method: Paypal"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="DELIVERY TO"
            subTitle={"Address:"}
            text="Lekki, Lagos, PMB 1950"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      <Box flex={1} px={6} pb={3}>
        <Heading fontSize={15} isTruncated bold my={4}>
          PRODUCTS
        </Heading>
        <OrderItem />
        <PlaceOrderModel />
      </Box>
    </Box>
  );
};

export default PlaceOrderScreen;
