import React, { useEffect, useState } from "react";

import { FlatList, ScrollView, VStack } from "native-base";
import { handleNavigate } from "../../src/utils/handleNavigate";
import HeaderHome from "../../src/components/HeaderHome";
import { BannerHome } from "../../src/components/BannerHome";
import CoffeeShopCard from "../../src/components/CoffeeShopCard";
import SwiperTitle from "../../src/components/SwiperTitle";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { CoffeeShop, getCoffeeShops } from "../../src/utils/getCoffeeShops";
import { ActivityIndicator, View } from "react-native";

const Home = () => {
  const [coffeeShops, setCoffeeShops] = useState<CoffeeShop[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getCoffeeShops().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCoffeeShops(data.result);
      }
      setIsLoading(false);
    });
  }, []);

  const storeData = async (value: CoffeeShop) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("coffeeshop", jsonValue);
    } catch (e) {}
  };

  const handleCoffeeNavigate = async (data: CoffeeShop) => {
    await storeData(data);
    handleNavigate("CoffeeShop");
  };

  return (
    <VStack safeAreaBottom>
      <HeaderHome />
      <ScrollView h={"full"}>
        <BannerHome />
        <SwiperTitle title="Cafeterias" />

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
          <FlatList
            data={coffeeShops}
            renderItem={({ item }) => (
              <CoffeeShopCard
                data={item}
                navigate={() => handleCoffeeNavigate(item)}
              />
            )}
            keyExtractor={(item: CoffeeShop) => item.name}
            horizontal
            showsHorizontalScrollIndicator={false}
            paddingLeft={8}
            paddingTop={3}
            paddingBottom={32}
          />
        )}
      </ScrollView>
    </VStack>
  );
};
export default Home;
