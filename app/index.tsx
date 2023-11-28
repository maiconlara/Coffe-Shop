import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import logo from "../assets/adaptive-icon.png";
import { handleMockLogin } from "../src/utils/handleMockLogin";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={logo} style={{ height: 280, width: 280 }} />
        <Text style={styles.title}>Coffee Shop</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={(text) => {
            setEmail(text);
          }}
        ></TextInput>
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => {
            setPassword(text);
          }}
        ></TextInput>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={() => {
            handleMockLogin(email, password);
          }}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default App;
