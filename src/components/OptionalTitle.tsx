import { HStack, Text } from "native-base";

const OptionalTitle = ({ title }: { title: string }) => {
  return (
    <HStack alignItems={"baseline"} space={2}>
      <Text fontSize="md" fontFamily="text" fontWeight="700" color={"black"}>
        {title}
      </Text>
      <Text fontSize="sm" fontFamily="text" fontWeight="400" color={"gray.400"}>
        (Opcional)
      </Text>
    </HStack>
  );
};
export default OptionalTitle;
