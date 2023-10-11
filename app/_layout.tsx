import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
import { Urbanist_400Regular, Urbanist_700Bold} from "@expo-google-fonts/urbanist";
import { Stack } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  const [isLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
    Urbanist_400Regular,
    Urbanist_700Bold,
  });

  if (!isLoadedFonts) {
    return null;
  }
  return (
    <View style={{ position: "relative", flex: 1, backgroundColor: "#f7f7f7" }}>
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
      </Stack>
    </View>
  );
}
