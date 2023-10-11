import { router } from "expo-router";
import { View, ScrollView } from "react-native";
import { styles } from "./styles";
import { Card } from "../../src/components/Card";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const data = [
  {
    id: 1,
    name: "Calculadora Média",
    icon: "calculate",
    routerFunction: () => {
      router.push("/average");
    },
  },
  {
    id: 2,
    name: "Counter",
    icon: "exposure-plus-1",
    routerFunction: () => {
      router.push("/counter");
    },
  },
  {
    id: 3,
    name: "Colors",
    icon: "invert-colors",
    routerFunction: () => {
      router.push("/rgbColor");
    },
  },
  {
    id: 4,
    name: "Exercicio Aula 05",
    icon: "insert-photo",
    routerFunction: () => {
      router.push("/exercicioAula05");
    },
  },
  {
    id: 5,
    name: "Yu Gi Oh! Password",
    icon: "videogame-asset",
    routerFunction: () => {
      router.push("/yugioh");
    },
  },
  {
    id: 6,
    name: "Yu Gi Oh! Deck",
    icon: "videogame-asset",
    routerFunction: () => {
      router.push("/yugiohDeck");
    },
  },
];

export default function App() {
  const { bottom, top } = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: bottom,
      }}
    >
      <View style={styles.container}>
        {data.map((item) => {
          return (
            <Card
              name={item.name}
              icon={item.icon}
              key={item.id}
              routerFunction={item.routerFunction}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
