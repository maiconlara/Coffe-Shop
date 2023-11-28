import { Radio, VStack } from "native-base";
import OptionalTitle from "../OptionalTitle";
import Optional from "../Optional";
import React, { memo, useEffect, useState } from "react";
import { Topping, getToppings } from "../../utils/getToppings";
import { ActivityIndicator } from "react-native";

interface ToppingsProps {
  setTopping: React.Dispatch<React.SetStateAction<Topping | undefined>>;
  topping?: Topping;
}

const Toppings = ({ setTopping, topping }: ToppingsProps) => {
  const [toppings, setToppings] = useState<Topping[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getToppings().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setToppings(data.result);
        if (data.result.length > 0) {
          setTopping(data.result[0]);
        }
        setIsLoading(false);
      }
    });
  }, []);

  const handleValueChange = (data: string) => {
    const selectedTopping = toppings.find((type) => type.name === data);
    setTopping(selectedTopping);
  };

  return (
    <VStack
      py={4}
      space={2}
      borderBottomWidth={2}
      borderBottomColor={"gray.300"}
    >
      <OptionalTitle title="Topping" />
      {isLoading ? (
        <ActivityIndicator size="large" color="#16a34a" />
      ) : (
        <Radio.Group
          name="Topping"
          onChange={handleValueChange}
          value={topping?.name}
        >
          {toppings.map((type) => (
            <Optional title={type.name} price={type.price} key={type.id} />
          ))}
        </Radio.Group>
      )}
    </VStack>
  );
};
export default memo(Toppings);
