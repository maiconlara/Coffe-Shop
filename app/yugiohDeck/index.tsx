import { View, ScrollView, Image } from "react-native";
import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { CardObject } from "../yugioh/interface";
import { DeckCard } from "../../src/components/DeckCard";

export default function App() {
  const { bottom} = useSafeAreaInsets();
  const [data, setData] = useState<CardObject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("deck");
        const parsedData = jsonValue != null ? JSON.parse(jsonValue) : [];
        setData(parsedData);
      } catch (e) {}
    };

    fetchData();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: bottom,
      }}
    >
      <View style={styles.container}>
        {data.map((item, index) => {
          return <DeckCard cardInfo={item} key={index} />;
        })}
      </View>
    </ScrollView>
  );
}
