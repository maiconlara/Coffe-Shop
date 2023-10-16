import { Radio, VStack } from "native-base";
import OptionalTitle from "../OptionalTitle";
import { typesOfEssence } from "../../../src/mocks/index";
import Optional from "../Optional";
import { memo, useState } from "react";

const EssenceType = () => {
  return (
    <VStack
      py={4}
      space={2}
      borderBottomWidth={2}
      borderBottomColor={"gray.300"}
    >
      <OptionalTitle title="Essências" />
      <Radio.Group name="essenceType">
        {typesOfEssence.map((type) => (
          <Optional title={type.name} price={type.price} key={type.id} />
        ))}
      </Radio.Group>
    </VStack>
  );
};
export default memo(EssenceType);
