import { Radio, VStack } from "native-base";
import OptionalTitle from "../OptionalTitle";
import { typesOfMilk } from "../../../src/mocks/index";
import Optional from "../Optional";
import { memo, useState } from "react";

const MilkType = () => {
  return (
    <VStack
      py={4}
      space={2}
      borderBottomWidth={2}
      borderBottomColor={"gray.300"}
    >
      <OptionalTitle title="Leite" />
      <Radio.Group name="milkType" >
        {typesOfMilk.map((type) => (
          <Optional title={type.name} price={type.price} key={type.id} />
        ))}
      </Radio.Group>
    </VStack>
  );
};
export default memo(MilkType);
