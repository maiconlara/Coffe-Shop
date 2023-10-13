import {
  Image,
  HStack,
  Box,
  AspectRatio,
  Circle,
  Pressable,
} from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface CoffeeShopInfoBannerProps {
  goBack: () => void;
}

const CoffeShopInfoBanner = ({ goBack }: CoffeeShopInfoBannerProps) => {
  const [isLiked, setIsLikes] = useState(false);

  const heartBtn = () => {
    return isLiked ? "#fc0303" : "#fff";
  };
  return (
    <Box w="100%">
      <AspectRatio>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
          }}
          alt="coffe"
        />
      </AspectRatio>
      <HStack
        justifyContent="space-between"
        px="4"
        py="2"
        w="100%"
        position="absolute"
        safeAreaTop
      >
        <Pressable onPress={goBack}>
          <Circle p={2} bg={"gray.300"}>
            <FontAwesomeIcon icon={faArrowLeftLong} size={24} color="white" />
          </Circle>
        </Pressable>
        <HStack space={4}>
          <Pressable onPress={() => setIsLikes(!isLiked)}>
            <Circle p={2} bg={"gray.300"}>
              <FontAwesomeIcon
                icon={faHeart}
                size={24}
                style={{ color: heartBtn() }}
              />
            </Circle>
          </Pressable>
        </HStack>
      </HStack>
    </Box>
  );
};
export default CoffeShopInfoBanner;
