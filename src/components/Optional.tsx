import { HStack, Radio, Text } from "native-base";

interface OptionalProps {
  title: string;
  price: number;
}

const Optional = ({ title, price }: OptionalProps) => {
  return (
    <HStack alignItems={"baseline"} justifyContent="space-between" w={"full"}>
      <Text fontSize="sm" fontFamily="text" fontWeight="400" color={"black"}>
        {title}
      </Text>
      <HStack alignItems={"center"} space={2}>
        <Text
          fontSize="xs"
          fontFamily="text"
          fontWeight="400"
          color={"gray.400"}
        >
          + R$ {price.toFixed(2)}
        </Text>
        <Radio
          colorScheme="emerald"
          value={title}
          my={1}
          aria-label={title}
        ></Radio>
      </HStack>
    </HStack>
  );
};
export default Optional;
