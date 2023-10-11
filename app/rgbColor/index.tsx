import React, { useState } from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";

export default function rgbColor() {
  const { top, bottom } = useSafeAreaInsets();
  const initialColors: string[] = [];

  const [colors, setColors] = useState(initialColors);
  
  const addColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    setColors((prevColors) => [...prevColors, `rgb(${r}, ${g}, ${b})`]);
  };

  return (
    <View
      style={{
        paddingTop: top,
        paddingBottom: bottom,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={addColor}
      >
        <Text style={styles.buttonText}>Gerar RGB</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          data={colors}
          numColumns={4}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View
              style={{ backgroundColor: item, width: 100, height: 100 }}
            ></View>
          )}
        />
      </View>
    </View>
  );
}
