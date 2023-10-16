import { HStack, Radio, Text } from "native-base";
import { View } from "react-native";

interface OptionalProps {
  title: string;
  price: number;
}

const Optional = ({ title, price }: OptionalProps) => {
  return (
    <HStack
        alignItems={"baseline"}
        justifyContent="space-between"
        w={"full"}
        p={2}
    >
      <Radio
        colorScheme="emerald"
        value={title}
        aria-label={title}
        justifyContent={"space-between"}
      >
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "85%"
        }}>
          <Text
            fontSize="sm"
            fontFamily="text"
            fontWeight="400"
            color={"black"}
          >
            {title}
          </Text>
          <Text
            fontSize="xs"
            fontFamily="text"
            fontWeight="400"
            color={"gray.400"}
            alignSelf={"flex-end"}
          >
            + R$ {price.toFixed(2)}
          </Text>
        </View>
      </Radio>
    </HStack>
  );
};
export default Optional;
