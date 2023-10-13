import { NativeBaseProvider } from "native-base";
import { useFonts } from "@expo-google-fonts/roboto";
import {
  Urbanist_400Regular,
  Urbanist_700Bold,
} from "@expo-google-fonts/urbanist";
import { Stack } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { fonts } from "../src/fonts";

export default function Layout() {
  const [isLoadedFonts] = useFonts({
    Urbanist_400Regular,
    Urbanist_700Bold,
  });

  if (!isLoadedFonts) {
    return null;
  }
  return (
    <NativeBaseProvider theme={fonts} isSSR={false}>
      <View
        style={{ position: "relative", flex: 1, backgroundColor: "#f7f7f7" }}
      >
        <StatusBar style="dark" translucent />

        <Stack
          screenOptions={{
            contentStyle: {
              backgroundColor: "transparent",
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="EmployeeList/index"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="CoffeeShop/index"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </View>
    </NativeBaseProvider>
  );
}
