import Header from "../../src/components/Header";
import Optional from "../../src/components/Optional";
import OptionalTitle from "../../src/components/OptionalTitle";
import SizeButton from "../../src/components/SizeButton";
import TemperatureButton from "../../src/components/TemperatureButton";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { topping, typesOfEssence, typesOfMilk } from "../../src/mocks/index";
import { goBack } from "../../src/utils/handleNavigate";
import {
  AspectRatio,
  Button,
  Center,
  HStack,
  Image,
  Pressable,
  Radio,
  ScrollView,
  StatusBar,
  Text,
  TextArea,
  VStack,
} from "native-base";
import { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";
import DrinkInformation from "../../src/components/OrderComponents/DrinkInformation";
import QuantityContainer from "../../src/components/OrderComponents/QuantityContainer";
import TemperatureContainer from "../../src/components/OrderComponents/TemperatureContainer";
import SizeContainer from "../../src/components/OrderComponents/SizeContainer";
import MilkType from "../../src/components/OrderComponents/MilkType";
import EssenceType from "../../src/components/OrderComponents/EssenceType";
import Toppings from "../../src/components/OrderComponents/Toppings";
import Observations from "../../src/components/OrderComponents/Observations";
import BillingContainer from "../../src/components/OrderComponents/BillingContainer";
import React from "react";

const Order = () => {
  return (
    <VStack paddingBottom={100}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header goBack={() => goBack()} title="Pedido" />
      <ScrollView px={8} automaticallyAdjustKeyboardInsets={true}>
        <AspectRatio>
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1661756522906-5df7ee690868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
            }}
            alt="coffe"
            rounded={8}
          />
        </AspectRatio>
        <HStack
          py={4}
          borderBottomWidth={2}
          borderBottomColor={"gray.300"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <DrinkInformation />
          <QuantityContainer />
        </HStack>
        <TemperatureContainer />
        <SizeContainer />
        <MilkType />
        <EssenceType />
        <Toppings />
        <Observations />
        <BillingContainer />
      </ScrollView>
    </VStack>
  );
};
export default Order;
