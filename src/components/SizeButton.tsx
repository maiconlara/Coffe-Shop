import { Text, Pressable, Center } from "native-base";

import Cup from "../assets/coffee-cups.svg";
import { useState } from "react";

const SizeButton = ({
  title,
  size,
  price,
}: {
  title: string;
  size: number;
  price: string;
}) => {
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
        h={32}
        w={20}
        justifyContent={"space-between"}
      >
        <Cup width={size} height={size} />
        <Text fontSize="sm" fontFamily="text" fontWeight="700">
          {title}
        </Text>
        <Text
          fontSize="xs"
          fontFamily="text"
          fontWeight="400"
          color={"gray.400"}
        >
          {price}
        </Text>
      </Center>
    </Pressable>
  );
};
export default SizeButton;
