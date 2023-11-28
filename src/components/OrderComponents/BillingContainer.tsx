import { HStack, VStack, Text, Button } from "native-base";
import React from "react";

interface BillingContainerProps {
  totalPrice: number;
  handleSaveOrder?: () => void;
}
const BillingContainer = ({
  totalPrice,
  handleSaveOrder,
}: BillingContainerProps) => {
  return (
    <>
      <Text
        marginBottom={8}
        fontSize="xs"
        fontFamily="text"
        fontWeight="400"
        color={"gray.500"}
      >
        Estamos aceitando apenas pedidos de um drink.
      </Text>
      <HStack alignItems={"center"} paddingBottom={8}>
        <VStack w={"1/4"}>
          <Text
            fontSize="xs"
            fontFamily="text"
            fontWeight="400"
            color={"gray.500"}
          >
            Valor total
          </Text>
          <Text fontSize="lg" fontFamily="text" fontWeight="700">
            R$ {totalPrice}
          </Text>
        </VStack>
        <Button
          onPress={handleSaveOrder}
          borderRadius="full"
          colorScheme="success"
          w={"3/4"}
        >
          Finalizar Compra
        </Button>
      </HStack>
    </>
  );
};
export default BillingContainer;
