import { View } from "react-native";

import { Form } from "../../src/components/Form";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form />
    </View>
  );
}
