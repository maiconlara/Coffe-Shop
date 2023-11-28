import { VStack, Text, TextArea } from "native-base";
import React from "react";


const Observations = () => {
    return (
        <VStack py={4} space={2}>
        <Text fontSize="md" fontFamily="text" fontWeight="700">
          Observações
        </Text>
        <TextArea
          h={32}
          placeholder="Adicione as observações do seu pedido aqui"
          w="100%"
          autoCompleteType={"off"}
          borderWidth={0}
          fontFamily={"text"}
          size={"md"}
          placeholderTextColor={"gray.400"}
          backgroundColor={"gray.200"}
          _focus={{ bg: "green.200" }}
        />
      </VStack>
    )
}
export default Observations;