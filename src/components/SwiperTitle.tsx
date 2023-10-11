import { Text, HStack } from "native-base";

import ArrowRight from "../assets/arrow-right.svg";

interface SwiperTitleProps {
  title: string;
}

const SwiperTitle = ({ title }: SwiperTitleProps) => {
  return (
    <HStack px="8" justifyContent="space-between" alignItems="center">
      <Text fontSize="xl" fontFamily="text" fontWeight="700" color="black">
        {title}
      </Text>
      <HStack alignItems="center" space={8}>
        <Text
          fontSize="sm"
          fontFamily="text"
          fontWeight="700"
          color="green.500"
        >
          Ver Todos
        </Text>
        <ArrowRight width={20} height={20} />
      </HStack>
    </HStack>
  );
};
export default SwiperTitle;
