import { Text, Pressable, Center } from "native-base";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMugHot, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { color } from "native-base/lib/typescript/theme/styled-system";

interface TemperatureButtonProps {
  title: string;
  isHot?: boolean;
}

const TemperatureButton = ({
  title,
  isHot = false,
}: TemperatureButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  function borderColors() {
    if (isPressed) {
      return "emerald.500";
    } else {
      return "gray.300";
    }
  }
  function handlePress() {
    if (isPressed) {
      setIsPressed(false);
    } else {
      setIsPressed(true);
    }
  }
  return (
    <Pressable onPress={handlePress}>
      <Center
        borderWidth={1}
        borderColor={borderColors()}
        py={4}
        px={2}
        borderRadius={8}
        h={24}
        justifyContent={"space-between"}
      >
        {isHot ? (
          <FontAwesomeIcon icon={faMugHot} size={24} />
        ) : (
          <FontAwesomeIcon icon={faSnowflake} size={24} />
        )}
        <Text fontSize="sm" fontFamily="text" fontWeight="700">
          {title}
        </Text>
      </Center>
    </Pressable>
  );
};
export default TemperatureButton;
