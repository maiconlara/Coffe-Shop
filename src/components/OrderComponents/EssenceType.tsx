import { Radio, VStack } from "native-base";
import OptionalTitle from "../OptionalTitle";
import Optional from "../Optional";
import React, { memo, useEffect, useState } from "react";
import {
  EssenceType as TypeOfEssence,
  getTypeOfEssence,
} from "../../utils/getTypesOfEssence";
import { ActivityIndicator, Text, View } from "react-native";

interface EssenceTypeProps {
  setEssenceType: React.Dispatch<
    React.SetStateAction<TypeOfEssence | undefined>
  >;
  essenceType?: TypeOfEssence;
}

const EssenceType = ({ essenceType, setEssenceType }: EssenceTypeProps) => {
  const [essences, setEssences] = useState<TypeOfEssence[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTypeOfEssence().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setEssences(data.result);
        if (data.result.length > 0) {
          setEssenceType(data.result[0]);
        }
        setIsLoading(false);
      }
    });
  }, []);

  const handleValueChange = (data: string) => {
    const selectedEssence = essences.find((type) => type.name === data);
    setEssenceType(selectedEssence);
  };

  return (
    <VStack
      py={4}
      space={2}
      borderBottomWidth={2}
      borderBottomColor={"gray.300"}
    >
      <OptionalTitle title="Essências" />
      {isLoading ? (
        <ActivityIndicator size="large" color="#16a34a" />
      ) : (
        <Radio.Group
          name="essenceType"
          onChange={handleValueChange}
          value={essenceType?.name}
        >
          {essences.map((type) => (
            <Optional title={type.name} price={type.price} key={type.id} />
          ))}
        </Radio.Group>
      )}
    </VStack>
  );
};
export default memo(EssenceType);
