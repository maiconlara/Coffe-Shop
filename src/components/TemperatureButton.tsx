import { Text, Pressable, Center } from "native-base";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMugHot, faSnowflake } from "@fortawesome/free-solid-svg-icons";


interface TemperatureButtonProps {
  title: string;
  isHot?: boolean;
  isSelected?: boolean;
  onPress?: () => void;
}

const TemperatureButton = ({
  title,
  isHot = false,
  isSelected,
  onPress,
}: TemperatureButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Center
        borderWidth={1}
        borderColor={isSelected ? "emerald.500" : "gray.300"}
        py={4}
        px={2}
        borderRadius={8}
        h={24}
        justifyContent={"space-between"}
      >
        <FontAwesomeIcon icon={isHot ? faMugHot : faSnowflake} size={24} />
        <Text fontSize="sm" fontFamily="text" fontWeight="700">
          {title}
        </Text>
      </Center>
    </Pressable>
  );
};
export default TemperatureButton;
