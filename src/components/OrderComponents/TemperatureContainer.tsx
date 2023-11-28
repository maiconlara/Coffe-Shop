import { HStack, VStack, Text } from "native-base";
import TemperatureButton from "../TemperatureButton";
import React, { useState } from "react";

const TemperatureContainer = () => {
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
        Disponível
      </Text>
      <HStack space={4}>
        <TemperatureButton
          title="Quente"
          isHot
          isSelected={selectedButton === "Quente"}
          onPress={() => handleButtonPress("Quente")}
        />
        <TemperatureButton
          title="Gelado"
          isSelected={selectedButton === "Gelado"}
          onPress={() => handleButtonPress("Gelado")}
        />
      </HStack>
    </VStack>
  );
};
export default TemperatureContainer;
