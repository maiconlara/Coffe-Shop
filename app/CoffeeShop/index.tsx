import React from "react";

import {
  VStack,
  StatusBar,
  Text,
  Center,
  HStack,
  ScrollView,
  View,
  Pressable,
} from "native-base";
import CoffeeShopInfoBanner from "../../src/components/CoffeShopInfoBanner";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight, faUser } from "@fortawesome/free-solid-svg-icons";
import CoffeeCard from "../../src/components/CoffeeCard";
import { Drinks } from "../../src/mocks/index";

import Location from "../../src/assets/location.svg";
import Star from "../../src/assets/star.svg";
import { CoffeeDrinks } from "../../src/interfaces/coffeeDrinks";

import { handleNavigate, goBack } from "../../src/utils/handleNavigate";

const CoffeeShop = () => {

  return (
    <ScrollView>
      <VStack>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <CoffeeShopInfoBanner goBack={() => goBack()} />
        <VStack px={8} py={2} space={4}>
          <Center
            paddingBottom={2}
            marginTop={2}
            borderBottomWidth={2}
            borderBottomColor={"gray.200"}
          >
            <Text
              fontSize="3xl"
              fontFamily="text"
              fontWeight="700"
              color="black"
            >
              Coffee Shop
            </Text>
          </Center>
          <Pressable onPress={() => handleNavigate("RatingPage")}>
            <HStack
              justifyContent="space-between"
              alignItems="center"
              paddingBottom={4}
              borderBottomWidth={2}
              borderBottomColor={"gray.200"}
            >
              <HStack space={2} alignItems="center">
                <Star width={24} height={24} />
                <Text
                  fontSize="lg"
                  fontFamily="text"
                  fontWeight="700"
                  color="black"
                >
                  3.8
                </Text>
                <Text
                  fontSize="sm"
                  fontFamily="text"
                  fontWeight="400"
                  color="gray.400"
                >
                  (2.5k avaliações)
                </Text>
              </HStack>
              <FontAwesomeIcon icon={faChevronRight} color="#71717a" />
            </HStack>
          </Pressable>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            paddingBottom={4}
            borderBottomWidth={2}
            borderBottomColor={"gray.200"}
          >
            <HStack space={2} alignItems="center">
              <Location width={24} height={24} />
              <VStack>
                <Text
                  fontSize="lg"
                  fontFamily="text"
                  fontWeight="700"
                  color="black"
                >
                  2.0 km
                </Text>
                <Text
                  fontSize="sm"
                  fontFamily="text"
                  fontWeight="400"
                  color="gray.400"
                >
                  Disponível para retirada e delivery
                </Text>
              </VStack>
            </HStack>
            <FontAwesomeIcon icon={faChevronRight} color="#71717a" />
          </HStack>
          <View
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
            flex={1}
            paddingBottom={10}
          >
            {Drinks.map((item: CoffeeDrinks) => (
              <CoffeeCard
                key={item.id}
                data={item}
                navigate={() => handleNavigate("Order")}
              />
            ))}
          </View>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
export default CoffeeShop;