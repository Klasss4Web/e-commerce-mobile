import { Box, Divider, Heading, HStack, VStack, Text } from "native-base";
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Pressable, View } from "react-native";
import { Colors } from "../color";
import CustomBtn from "./CustomBtn";
import { AntDesign } from "@expo/vector-icons";

const CustomModal = ({
  children,
  title,
  btnTitle,
  setModalVisible,
  modalVisible,
}) => {
//   const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <CustomBtn
        color={Colors.white}
        bg={Colors.black}
        onPress={() => setModalVisible(true)}
      >
        {btnTitle}
      </CustomBtn>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Box maxW={360} style={styles.centeredView}>
          <Box style={styles.modalView} width="100%">
            <HStack
              width="full"
              justifyContent={"space-between"}
              //   align={"space-between"}
            >
              <Heading style={styles.modalText}>{title}</Heading>
              <AntDesign
                name="close"
                size={24}
                color={Colors.black}
                onPress={() => setModalVisible(!modalVisible)}
              />
            </HStack>
            <Divider mb={"12px"} />
            {children}
          </Box>
        </Box>
      </Modal>
    </View>
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
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingBottom: 20,
    paddingTop: 10,
    width: 320,
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

export default CustomModal;
