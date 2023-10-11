import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export default function Counter() {
  const [count, setCount] = useState(0); 
  const handleCounter = () => {
    setCount(count + 1);
  }
  const resetCounter = () => { 
    setCount(0);
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{count}</Text>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={handleCounter}
      >
        <Text style={styles.buttonText}>Acrescentar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={resetCounter}	
      >
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
