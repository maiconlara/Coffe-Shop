import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";

import { styles } from "./styles";

interface FormInputProps {
  text: string;
  handleNumber: (newNumber: number) => void;
}

export function FormInput({ text, handleNumber }: FormInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerDiv}>
        <Text style={styles.text}>Insira o {text} Numero</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          onChangeText={(event) => handleNumber(parseInt(event))}
        ></TextInput>
      </View>
    </View>
  );
}
