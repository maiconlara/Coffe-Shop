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
import React from "react";
import { RootSiblingParent } from "react-native-root-siblings";

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
      <RootSiblingParent>
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
              name="Home/index"
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
            <Stack.Screen
              name="Order/index"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="RatingPage/index"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="End/index"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </View>
      </RootSiblingParent>
    </NativeBaseProvider>
  );
}
