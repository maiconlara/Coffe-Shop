import { Text, Pressable, Center } from "native-base";

import Cup from "../assets/coffee-cups.svg";
import { useState } from "react";

interface SizeButtonProps {
  title: string;
  size: number;
  price: string;
  isSelected?: boolean;
  onPress?: () => void;
}

const SizeButton = ({
  title,
  size,
  price,
  isSelected,
  onPress,
}: SizeButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Center
        borderWidth={1}
        borderColor={isSelected ? "emerald.500" : "gray.300"}
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
