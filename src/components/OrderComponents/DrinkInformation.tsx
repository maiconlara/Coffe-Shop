import { VStack, Text } from "native-base";
import React from "react";
import { Drink } from "../../utils/getDrinks";

interface DrinkInformationProps {
  drink?: Drink;
}
const DrinkInformation = ({ drink }: DrinkInformationProps) => {
  return (
    <VStack>
      <Text fontSize="2xl" fontFamily="text" fontWeight="700">
        {drink?.name}
      </Text>
      <Text fontSize="md" fontFamily="text" fontWeight="400">
        R$ {drink?.price}
      </Text>
    </VStack>
  );
};
export default DrinkInformation;
