import { Text, HStack } from "native-base";

import ArrowRight from "../assets/arrow-right.svg";
import React from "react";

interface SwiperTitleProps {
  title: string;
}

const SwiperTitle = ({ title }: SwiperTitleProps) => {
  return (
    <HStack px="8" justifyContent="space-between" alignItems="center">
      <Text fontSize="xl" fontFamily="text" fontWeight="700" color="black">
        {title}
      </Text>
    </HStack>
  );
};
export default SwiperTitle;
