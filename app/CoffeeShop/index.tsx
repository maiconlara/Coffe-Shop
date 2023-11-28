import React, { useEffect, useState } from "react";

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
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CoffeeCard from "../../src/components/CoffeeCard";

import Location from "../../src/assets/location.svg";
import Star from "../../src/assets/star.svg";

import { handleNavigate, goBack } from "../../src/utils/handleNavigate";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CoffeeShop as CoffeeShopType } from "../../src/utils/getCoffeeShops";
import { Drink, getDrinks } from "../../src/utils/getDrinks";
import { ActivityIndicator } from "react-native";

const CoffeeShop = () => {
  const [data, setData] = useState<CoffeeShopType>();
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("coffeeshop");
        const parsedData = jsonValue != null ? JSON.parse(jsonValue) : [];
        setData(parsedData);
      } catch (e) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    getDrinks().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setDrinks(data.result);
      }
      setIsLoading(false);
    });
  }, []);

  const storeData = async (value: Drink) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("drink", jsonValue);
    } catch (e) {}
  };

  const handleOrderNavigate = async (data: Drink) => {
    await storeData(data);
    handleNavigate("Order");
  };

  return (
    <ScrollView>
      <VStack>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <CoffeeShopInfoBanner image={data?.img} goBack={() => goBack()} />
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
              {data?.name}
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
                  {data?.rating}
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
                  {data?.distance} km
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
            {isLoading ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 50,
                }}
              >
                <ActivityIndicator size="large" color="#16a34a" />
              </View>
            ) : (
              drinks.map((item: Drink) => (
                <CoffeeCard
                  key={item.id}
                  data={item}
                  navigate={() => handleOrderNavigate(item)}
                />
              ))
            )}
          </View>
        </VStack>
      </VStack>
    </ScrollView>
  );
};
export default CoffeeShop;
