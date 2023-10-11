import React from "react";
import { Text, TouchableOpacity, Alert } from "react-native";

import { styles } from "./styles";

interface ButtonProps {
  title: string;
  printMean: string;
}

export function Button({ title, printMean }: ButtonProps) {
  return (
    <TouchableOpacity
    activeOpacity={0.6}
      style={styles.container}
      onPress={() => Alert.alert(printMean)}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
