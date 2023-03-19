import { Divider, HStack, Image, Pressable, VStack } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../color";
import CustomModal from "./CustomModal";
import CustomBtn from "./CustomBtn";
import { useNavigation } from "@react-navigation/native";

const OrderModal = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
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
    <CustomModal
      setModalVisible={setShowModal}
      modalVisible={showModal}
      title={"Order"}
      btnTitle="SHOW PAYMENT & TOTAL"
    >
      <VStack space={7} width={"100%"}>
        {OrdersInfo.map((order, key) => (
          <HStack
            key={key}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Text fontWeight="medium">{order?.title}</Text>
            <Text
              bold
              color={order.color === "main" ? Colors.main : Colors.black}
              fontSize={20}
            >
              ${order?.price}
            </Text>
          </HStack>
        ))}
      </VStack>
      <Divider my={4} />
      <Pressable
        w="full"
        justifyContent={"center"}
        bg={Colors.paypal}
        h={45}
        rounded={10}
        overflow="hidden"
        onPress={() => {
          navigation.navigate("Home");
          setShowModal(false);
        }}
      >
        <Image
          alt=""
          source={require("../../assets/paypal.png")}
          resizeMode="contain"
          width="full"
          height={34}
        />
      </Pressable>
      <CustomBtn
        mt={4}
        flex={1}
        bg={Colors.main}
        color={Colors.white}
        _text={{ color: Colors.white }}
        onPress={() => setShowModal(false)}
        _pressed={{
          bg: Colors.main,
        }}
      >
        PAY LATER
      </CustomBtn>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default OrderModal;
