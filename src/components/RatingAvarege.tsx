import { HStack, Text, Progress } from "native-base";

interface RatingAverageProps {
  starsQuantity: number;
  totalReviews: number;
}

const RatingAverage = ({ starsQuantity, totalReviews }: RatingAverageProps) => {
  return (
    <HStack alignItems={"center"} space={4}>
      <Text fontSize="lg" fontFamily="text" fontWeight="700">
        {starsQuantity}
      </Text>
      <Progress colorScheme="green" value={totalReviews} size={"sm"} w={125} />
    </HStack>
  );
};
export default RatingAverage;
