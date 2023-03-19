import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "native-base";

const CustomBtn = ({ mt, bg, color, children, onPress }) => {
  return (
    <Button
      w="full"
      h={55}
      mt={mt}
      rounded="full"
      bg={bg}
      _text={{
        color: color,
        fontWeight: "bold",
      }}
      _pressed={{ bg: bg }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
};

export default CustomBtn;
