import React from 'react'
import { FlatList, ScrollView, View, VStack } from 'native-base'
import { HeaderHome } from '@components/HeaderHome'
import { BannerHome } from '@components/BannerHome'

import { CoffeeShopCard } from '@components/CoffeeShopCard'
import { coffeeShops, Drinks } from '@mocks/index'
import { SwiperTitle } from '@components/SwiperTitle'
import { CoffeeCard } from '@components/CoffeeCard'
import { styles } from "./styles";


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
    </View>
  );
}
