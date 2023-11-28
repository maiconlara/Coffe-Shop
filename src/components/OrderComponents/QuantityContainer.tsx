import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { HStack, Text, Center } from "native-base";
import { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";
import React from "react";

interface QuantityContainerProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const QuantityContainer = ({
  quantity,
  setQuantity,
}: QuantityContainerProps) => {
  const handleIncrement = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  }, []);
  return (
    <HStack>
      <TouchableOpacity onPress={handleDecrement}>
        <Center
          borderWidth={1}
          borderColor={"green.500"}
          padding={2}
          borderRadius={8}
        >
          <FontAwesomeIcon icon={faMinus} size={16} color="#22c55e" />
        </Center>
      </TouchableOpacity>
      <Text fontSize="xl" fontFamily="text" fontWeight="700" px={4}>
        {quantity}
      </Text>
      <TouchableOpacity onPress={handleIncrement}>
        <Center
          borderWidth={1}
          borderColor={"green.500"}
          padding={2}
          borderRadius={8}
        >
          <FontAwesomeIcon icon={faPlus} size={16} color="#22c55e" />
        </Center>
      </TouchableOpacity>
    </HStack>
  );
};
export default QuantityContainer;
