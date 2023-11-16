import { HStack, VStack, Text, Button } from "native-base";
import React from "react";



const BillingContainer = () => {
    return ( 
        <HStack alignItems={"center"} paddingBottom={100}>
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
            R$ 15.00
          </Text>
        </VStack>
        <Button borderRadius="full" colorScheme="success" w={"3/4"}>
          Adicionar
        </Button>
      </HStack> 
    )
}
export default BillingContainer;