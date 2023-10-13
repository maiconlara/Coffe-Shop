import Header from "../../src/components/Header";
import Optional from "../../src/components/Optional";
import OptionalTitle from "../../src/components/OptionalTitle";
import SizeButton from "../../src/components/SizeButton";
import TemperatureButton from "../../src/components/TemperatureButton";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { topping, typesOfEssence, typesOfMilk } from "../../src/mocks/index";
import { goBack } from "../../src/utils/handleNavigate";
import {
  AspectRatio,
  Button,
  Center,
  HStack,
  Image,
  Pressable,
  Radio,
  ScrollView,
  StatusBar,
  Text,
  TextArea,
  VStack,
} from "native-base";
import { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";
import DrinkInformation from "../../src/components/OrderComponents/DrinkInformation";
import QuantityContainer from "../../src/components/OrderComponents/QuantityContainer";
import TemperatureContainer from "../../src/components/OrderComponents/TemperatureContainer";
import SizeContainer from "../../src/components/OrderComponents/SizeContainer";

const Order = () => {
  return (
    <VStack paddingBottom={100}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header goBack={() => goBack()} title="Pedido" />
      <ScrollView px={8} automaticallyAdjustKeyboardInsets={true}>
        <AspectRatio>
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1661756522906-5df7ee690868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
            }}
            alt="coffe"
            rounded={8}
          />
        </AspectRatio>
        <HStack
          py={4}
          borderBottomWidth={2}
          borderBottomColor={"gray.300"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <DrinkInformation />
          <QuantityContainer />
        </HStack>
        <TemperatureContainer />
        <SizeContainer />
        {/* 
        <VStack
          py={4}
          space={2}
          borderBottomWidth={2}
          borderBottomColor={"gray.300"}
        >
          <OptionalTitle title="Leite" />
          <Radio.Group name="milkType">
            {typesOfMilk.map((type) => (
              <Optional title={type.name} price={type.price} key={type.id} />
            ))}
          </Radio.Group>
        </VStack>
        <VStack
          py={4}
          space={2}
          borderBottomWidth={2}
          borderBottomColor={"gray.300"}
        >
          <OptionalTitle title="Essências" />
          <Radio.Group name="essenceType">
            {typesOfEssence.map((type) => (
              <Optional title={type.name} price={type.price} key={type.id} />
            ))}
          </Radio.Group>
        </VStack>
        <VStack
          py={4}
          space={2}
          borderBottomWidth={2}
          borderBottomColor={"gray.300"}
        >
          <OptionalTitle title="Topping" />
          <Radio.Group name="Topping">
            {topping.map((type) => (
              <Optional title={type.name} price={type.price} key={type.id} />
            ))}
          </Radio.Group>
        </VStack>
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
        </HStack> */}
      </ScrollView>
    </VStack>
  );
};
export default Order;
