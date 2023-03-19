import { Box, Heading, ScrollView } from "native-base";
import React from "react";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Colors } from "../color";
import OrderInfo from "../components/OrderInfo";
import OrderItem from "../components/OrderItem";
import OrderModal from "../components/OrderModal";

const OrderScreen = () => {

  const OrdersInfo = [
    {
      title: "Products",
      price: 200.3,
      color: "black",
    },
    {
      title: "Shipping",
      price: 20.3,
      color: "black",
    },
    {
      title: "Tax",
      price: 24.3,
      color: "black",
    },
    {
      title: "Total Amount",
      price: 244.9,
      color: "main",
    },
  ];
  return (
    <Box bg={Colors.subGreen} flex={1} safeAreaTop pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
       
          <OrderInfo
            title="SHIPPING INFO"
            success
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
            danger
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
        <OrderModal />
      </Box>
    </Box>
  );
};

export default OrderScreen;
