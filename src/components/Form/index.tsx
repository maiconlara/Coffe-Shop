import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import { FormInput } from "./FormInput";
import { handleIsNaN } from "../../utils/handleIsNaN";
import { Button } from "../Button";

import { styles } from "./styles";

export function Form() {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);

  const printMean = handleIsNaN(firstNumber, secondNumber);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Calculadora de Média</Text>
      <FormInput text="Primeiro" handleNumber={setFirstNumber} />
      <FormInput text="Segundo" handleNumber={setSecondNumber} />

      <View style={styles.containerDiv}>
        <Button
          title="Calcular"
          printMean={printMean}
        ></Button>
      </View>
    </View>
  );
}
