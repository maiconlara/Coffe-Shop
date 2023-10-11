import { Box, HStack, Pressable, VStack, Image, Text } from "native-base";
import { CoffeeDrinks } from "../interfaces/coffeeDrinks";
import React from "react";

interface CoffeeCardProps {
  data: CoffeeDrinks;
  navigate: () => void;
}

const CoffeeCard = ({ data, navigate }: CoffeeCardProps) => {
  return (
    <Box>
      <Pressable onPress={navigate}>
        <VStack justifyContent="center" space={1} minWidth={120} marginTop={2}>
          <Image
            source={{
              uri: data.img,
            }}
            alt="coffe"
            size={140}
            borderRadius={12}
          />
          <Text fontSize="md" fontFamily="text" fontWeight="700" color="black">
            {data?.name}
          </Text>
          <HStack>
            <Text
              fontSize="sm"
              fontFamily="text"
              fontWeight="700"
              color="green.500"
            >
              R$ {data?.price}
            </Text>
          </HStack>
        </VStack>
      </Pressable>
    </Box>
  );
};
export default CoffeeCard;
