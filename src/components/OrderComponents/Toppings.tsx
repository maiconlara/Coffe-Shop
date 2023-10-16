import { Radio, VStack } from "native-base";
import OptionalTitle from "../OptionalTitle";
import { topping } from "../../../src/mocks/index";
import Optional from "../Optional";
import { memo } from "react";

const Toppings = () => {
  return (
    <VStack
      py={4}
      space={2}
      borderBottomWidth={2}
      borderBottomColor={"gray.300"}
    >
      <OptionalTitle title="Topping" />
      <Radio.Group name="Topping">
        {topping.map((type) => (
          <Optional title={type.name} price={type.price} key={type.id} />
        ))}
      </Radio.Group>
    </VStack>
  );
};
export default memo(Toppings);
