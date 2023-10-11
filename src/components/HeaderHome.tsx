import { Avatar, HStack, Text, VStack, Circle } from "native-base";

import Bell from "../assets/bell.svg";

const HeaderHome = () => {
  return (
    <HStack
      px="8"
      py="4"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      safeAreaTop
    >
      <HStack alignItems="center" space={4}>
        <Avatar
          bg="green.500"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
        <VStack>
          <Text fontFamily="text" fontWeight="400">
            Bom dia! 🌤️
          </Text>
          <Text fontSize="20" fontFamily="text" fontWeight="700">
            Jane Doe
          </Text>
        </VStack>
      </HStack>
      <Circle p="3" borderWidth={1} borderColor={"gray.300"}>
        <Bell width={24} height={24} />
      </Circle>
    </HStack>
  );
};
export default HeaderHome;
