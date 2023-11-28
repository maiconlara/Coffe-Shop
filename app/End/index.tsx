import React, { useEffect, useState } from "react";

import {
  Avatar,
  Button,
  HStack,
  ScrollView,
  VStack,
  Text as NativeText,
} from "native-base";
import HeaderHome from "../../src/components/HeaderHome";
import { BannerHome } from "../../src/components/BannerHome";
import SwiperTitle from "../../src/components/SwiperTitle";

import { View, Text } from "react-native";
import { Pedido } from "../../src/utils/postOrder";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { handleNavigate } from "../../src/utils/handleNavigate";
import { styles } from "../styles";

const End = () => {
  const [data, setData] = useState<Pedido>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("pedido");
        const parsedData = jsonValue != null ? JSON.parse(jsonValue) : [];
        setData(parsedData);
      } catch (e) {}
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <HStack alignItems="center" space={4}>
        <Avatar
          bg="green.500"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
        <VStack>
          <NativeText fontSize="20" fontFamily="text" fontWeight="700">
            Jane Doe
          </NativeText>
        </VStack>
      </HStack>
      <View style={styles.titleContainer}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 2,
          }}
        >
          Pedido Realizado!
        </Text>
        <Text
          style={{
            fontSize: 14,
          }}
        >
          Agora é só esperar o seu pedido chegar!
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text>Pedido: {data?.pedido.product[0].name}</Text>

        <Text>Valor da compra: R$ {data?.pedido.valor_total}</Text>

        <Button
          onPress={() => handleNavigate("Home")}
          borderRadius="full"
          colorScheme="success"
          w={"3/4"}
          marginTop={12}
        >
          Legal!
        </Button>
      </View>
    </View>
  );
};
export default End;
