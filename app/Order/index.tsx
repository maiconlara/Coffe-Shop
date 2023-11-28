import Header from "../../src/components/Header";
import { goBack } from "../../src/utils/handleNavigate";
import {
  AspectRatio,
  HStack,
  Image,
  ScrollView,
  StatusBar,
  VStack,
} from "native-base";
import { useEffect, useState } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Drink } from "../../src/utils/getDrinks";
import { MilkType as MilkTyping } from "../../src/utils/getTypesOfMilk";
import { EssenceType as TypeOfEssence } from "../../src/utils/getTypesOfEssence";
import { Topping } from "../../src/utils/getToppings";
import { CoffeeShop, getCoffeeShops } from "../../src/utils/getCoffeeShops";
import {
  Order as OrderType,
  Pedido,
  postOrder,
} from "../../src/utils/postOrder";

const Order = () => {
  const [data, setData] = useState<Drink>();
  const [quantity, setQuantity] = useState(1);
  const [milkType, setMilkType] = useState<MilkTyping>();
  const [essenceType, setEssenceType] = useState<TypeOfEssence>();
  const [topping, setTopping] = useState<Topping>();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("drink");
        const parsedData = jsonValue != null ? JSON.parse(jsonValue) : [];
        setData(parsedData);
      } catch (e) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      let price = data.price * quantity;

      if (milkType) {
        price += milkType.price * quantity;
      }

      if (essenceType) {
        price += essenceType.price * quantity;
      }

      if (topping) {
        price += topping.price * quantity;
      }

      setTotalPrice(price);
    }
  }, [quantity, data, milkType, essenceType, topping]);

  const handleSaveOrder = async () => {
    if (!data || !milkType || !essenceType || !topping) {
      console.log("error");
      throw new Error("vish!");
    }

    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    const pedidoFinal: Pedido = {
      pedido: {
        product: [
          {
            id: data?.id,
            name: data?.name,
            price: data?.price,
            img: data?.img,
            typesOfMilk: {
              id: milkType?.id,
              name: milkType?.name,
              price: milkType?.price,
            },
            typesOfEssence: {
              id: essenceType?.id,
              name: essenceType?.name,
              price: essenceType?.price,
            },
            topping: {
              id: topping?.id,
              name: topping?.name,
              price: topping?.price,
            },
          },
        ],
        user_id: 1,
        valor_total: totalPrice,
        id_cafeteria: Math.floor(Math.random() * 3) + 1,
        data_compra: formattedDate,
      },
    };

    await AsyncStorage.setItem("pedido", JSON.stringify(pedidoFinal));
    console.log(pedidoFinal);
    await postOrder(pedidoFinal);
  };

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
              uri: data?.img,
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
          <DrinkInformation drink={data} />
          <QuantityContainer quantity={quantity} setQuantity={setQuantity} />
        </HStack>
        <TemperatureContainer />
        <SizeContainer />
        <MilkType setMilkType={setMilkType} milkType={milkType} />
        <EssenceType
          setEssenceType={setEssenceType}
          essenceType={essenceType}
        />
        <Toppings topping={topping} setTopping={setTopping} />
        <Observations />
        <BillingContainer
          totalPrice={totalPrice}
          handleSaveOrder={handleSaveOrder}
        />
      </ScrollView>
    </VStack>
  );
};
export default Order;
