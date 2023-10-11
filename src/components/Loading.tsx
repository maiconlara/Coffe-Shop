import { Spinner, Center, Text, VStack, Image } from "native-base";

import Logo from "../assets/logo.png";

const Loading = () => {
  return (
    <VStack flex={1} justifyContent="center" space={12}>
      <Center>
        <Image source={Logo} alt="Caffely" size="xl" />
        <Text fontSize="4xl" fontFamily="text" fontWeight="700">
          Caffely
        </Text>
      </Center>
      <Spinner size="lg" color="emerald.500" />
    </VStack>
  );
};
export default Loading;
