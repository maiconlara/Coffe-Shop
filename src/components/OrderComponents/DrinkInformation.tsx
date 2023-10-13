import { VStack, Text } from "native-base";

const DrinkInformation = () => {
  return (
    <VStack>
      <Text fontSize="2xl" fontFamily="text" fontWeight="700">
        Drink
      </Text>
      <Text fontSize="md" fontFamily="text" fontWeight="400">
        R$ 5.00
      </Text>
    </VStack>
  );
};
export default DrinkInformation;
