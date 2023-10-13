import React from "react";
import { FlatList, ScrollView, View, VStack } from "native-base";
import { coffeeShops, Drinks } from "../src/mocks/index";
import { router } from "expo-router";

import HeaderHome from "../src/components/HeaderHome";
import { BannerHome } from "../src/components/BannerHome";
import CoffeeShopCard from "../src/components/CoffeeShopCard";
import SwiperTitle from "../src/components/SwiperTitle";
import CoffeeCard from "../src/components/CoffeeCard";

import { CoffeeDrinks } from "../src/interfaces/coffeeDrinks";
import { CoffeeShops } from "../src/interfaces/coffeeShops";
import { Text, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <VStack safeAreaBottom>
      <HeaderHome />
      <ScrollView h={"full"}>
        <BannerHome />
        <TouchableOpacity onPress={() => router.push("/EmployeeList")}>
          <Text>EmployeeList</Text>
        </TouchableOpacity>
        <SwiperTitle title="Cafeterias por perto" />
        <FlatList
          data={coffeeShops}
          renderItem={({ item }) => (
            <CoffeeShopCard data={item} navigate={() => {}} />
          )}
          keyExtractor={(item: CoffeeShops) => item.id.toString()}
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
          {Drinks.map((item: CoffeeDrinks) => (
            <CoffeeCard key={item.id} data={item} navigate={() => {}} />
          ))}
        </View>
      </ScrollView>
    </VStack>
  );
}
