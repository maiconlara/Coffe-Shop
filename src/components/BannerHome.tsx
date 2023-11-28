import { Text, VStack, Image, HStack } from "native-base";
import React from "react";
import Coffee from "../assets/coffee.png";

export function BannerHome() {
  return (
    <HStack
      marginX={8}
      marginBottom={4}
      px="4"
      py="4"
      borderRadius={12}
      bg="green.600"
      alignItems="center"
    >
      <VStack flex={1} justifyContent="center" space={2}>
        <Text fontSize="4xl" fontFamily="text" fontWeight="700" color="white">
          30% Off
        </Text>
        <Text fontSize="lg" fontFamily="text" fontWeight="700" color="white">
          Oferta por tempo limitado!
        </Text>
        <Text fontSize="sm" fontFamily="text" fontWeight="400" color="white">
          Aproveite um desconto fantástico em todos os produtos da loja!
        </Text>
      </VStack>
      <Image source={Coffee} alt="coffee" size="xl" />
    </HStack>
  );
}
