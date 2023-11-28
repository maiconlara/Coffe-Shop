import React, { useEffect, useState } from "react";

import { FlatList, ScrollView, View, VStack } from "native-base";
import { handleNavigate, goBack } from "../../src/utils/handleNavigate";
import HeaderHome from "../../src/components/HeaderHome";
import { BannerHome } from "../../src/components/BannerHome";
import CoffeeShopCard from "../../src/components/CoffeeShopCard";
import SwiperTitle from "../../src/components/SwiperTitle";
import CoffeeCard from "../../src/components/CoffeeCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { CoffeeShop, getCoffeeShops } from "../../src/utils/getCoffeeShops";
import { Drink, getDrinks } from "../../src/utils/getDrinks";

const Home = () => {
  const [coffeeShops, setCoffeeShops] = useState<CoffeeShop[]>([]);
  const [drinks, setDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    getCoffeeShops().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCoffeeShops(data.result);
      }
    });
    getDrinks().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setDrinks(data.result);
      }
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
        />
        <SwiperTitle title="Mais pedidos" />
        <View
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
          px={8}
          flex={1}
          paddingBottom={200}
        >
          {drinks.map((item: Drink) => (
            <CoffeeCard
              key={item.id}
              data={item}
              navigate={() => handleNavigate("Order")}
            />
          ))}
        </View>
      </ScrollView>
    </VStack>
  );
};
export default Home;
