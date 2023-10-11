import { Text, VStack, Image, HStack, Box, Pressable } from "native-base";

import { CoffeeShops } from "../interfaces/coffeeShops";
import Location from "../assets/location.svg";
import Star from "../assets/star.svg";

interface CoffeeShopsProps {
  data: CoffeeShops;
  navigate: () => void;
}

const CoffeeShopCard = ({ data, navigate }: CoffeeShopsProps) => {
  return (
    <Box>
      <Pressable onPress={navigate}>
        <VStack
          flex={1}
          justifyContent="center"
          space={1}
          marginRight={6}
          marginBottom={4}
          width={150}
        >
          <Box>
            <Image
              source={{
                uri: data.img,
              }}
              alt="coffe"
              size="2xl"
              borderRadius={12}
            />
            <HStack
              space={1}
              alignItems="center"
              justifyContent="center"
              position="absolute"
              top={2}
              left={2}
              bg="gray.500"
              borderRadius={4}
              p={1}
            >
              <Star width={12} height={12} />
              <Text
                fontSize="sm"
                fontFamily="text"
                fontWeight="700"
                color="white"
              >
                {data?.rating}
              </Text>
            </HStack>
          </Box>
          <Text fontSize="md" fontFamily="text" fontWeight="700" color="black">
            {data?.name}
          </Text>
          <HStack>
            <Location width={20} height={20} />
            <Text
              fontSize="sm"
              fontFamily="text"
              fontWeight="400"
              color="black"
            >
              {data?.distance} km
            </Text>
          </HStack>
        </VStack>
      </Pressable>
    </Box>
  );
};
export default CoffeeShopCard;
