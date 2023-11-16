import React from "react";
import { useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import logo from "../assets/adaptive-icon.png";

const App = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={logo} style={{ height: 280, width: 280 }} />
        <Text style={styles.title}>Coffee Shop</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          keyboardType="number-pad"
          style={styles.input}
          onChangeText={() => {}}
        ></TextInput>
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={() => {}}
        ></TextInput>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={() => {
            router.push("Home");
          }}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default App;
