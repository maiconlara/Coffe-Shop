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

const Order = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  }, []);
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
          <VStack>
            <Text fontSize="2xl" fontFamily="text" fontWeight="700">
              Drink
            </Text>
            <Text fontSize="md" fontFamily="text" fontWeight="400">
              R$ 5.00
            </Text>
          </VStack>
          <HStack>
            <TouchableOpacity onPress={handleDecrement}>
              <Center
                borderWidth={1}
                borderColor={"green.500"}
                padding={2}
                borderRadius={8}
              >
                <FontAwesomeIcon icon={faMinus} size={16} color="#22c55e" />
              </Center>
            </TouchableOpacity>
            <Text fontSize="xl" fontFamily="text" fontWeight="700" px={4}>
              {quantity}
            </Text>
            <TouchableOpacity onPress={handleIncrement}>
              <Center
                borderWidth={1}
                borderColor={"green.500"}
                padding={2}
                borderRadius={8}
              >
                <FontAwesomeIcon icon={faPlus} size={16} color="#22c55e" />
              </Center>
            </TouchableOpacity>
          </HStack>
        </HStack>
        {/* <VStack
          py={4}
          borderBottomWidth={2}
          borderBottomColor={"gray.300"}
          space={2}
        >
          <Text fontSize="md" fontFamily="text" fontWeight="700">
            Disponível
          </Text>
          <HStack space={4}>
            <TemperatureButton title="Quente" isHot />
            <TemperatureButton title="Gelado" />
          </HStack>
        </VStack> */}
        {/* <VStack
          py={4}
          borderBottomWidth={2}
          borderBottomColor={"gray.300"}
          space={2}
        >
          <Text fontSize="md" fontFamily="text" fontWeight="700">
            Tamanho
          </Text>
          <HStack space={4}>
            <SizeButton title="Pequeno" size={18} price="Free" />
            <SizeButton title="Médio" size={24} price="+ R$ 1.00" />
            <SizeButton title="Grande" size={36} price="+ R$ 2.00" />
          </HStack>
        </VStack>
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
