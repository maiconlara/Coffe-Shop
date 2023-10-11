import { HStack, Text, Center, View } from "native-base";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Pressable } from "react-native";

interface HeaderProps {
  title: string;
  goBack: () => void;
}

const Header = ({ title, goBack }: HeaderProps) => {
  return (
    <HStack
      px="8"
      py="4"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      safeAreaTop
    >
      <Pressable onPress={goBack}>
        <FontAwesomeIcon icon={faArrowLeftLong} size={24} color="black" />
      </Pressable>
      <Center>
        <Text fontSize="20" fontFamily="text" fontWeight="700">
          {title}
        </Text>
      </Center>
      <View></View>
    </HStack>
  );
};
export default Header;
