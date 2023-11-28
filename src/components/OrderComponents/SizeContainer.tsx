import { VStack, Text, HStack } from "native-base";
import SizeButton from "../SizeButton";
import React, { useState } from "react";

const SizeContainer = () => {
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonPress = (buttonTitle: string) => {
    setSelectedButton(buttonTitle);
  };

  return (
    <VStack
      py={4}
      borderBottomWidth={2}
      borderBottomColor={"gray.300"}
      space={2}
    >
      <Text fontSize="md" fontFamily="text" fontWeight="700">
        Tamanho
      </Text>
      <HStack space={4}>
        <SizeButton
          title="Pequeno"
          size={18}
          price="+ R$ 0.00"
          isSelected={selectedButton === "Pequeno"}
          onPress={() => handleButtonPress("Pequeno")}
        />
        <SizeButton
          title="Médio"
          size={24}
          price="+ R$ 0.00"
          isSelected={selectedButton === "Médio"}
          onPress={() => handleButtonPress("Médio")}
        />
        <SizeButton
          title="Grande"
          size={36}
          price="+ R$ 0.00"
          isSelected={selectedButton === "Grande"}
          onPress={() => handleButtonPress("Grande")}
        />
      </HStack>
    </VStack>
  );
};
export default SizeContainer;
