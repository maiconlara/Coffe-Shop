import { Radio, VStack } from "native-base";
import OptionalTitle from "../OptionalTitle";
import Optional from "../Optional";
import React, { memo, useEffect, useState } from "react";
import {
  MilkType as MilkTypes,
  getTypeOfMilks,
} from "../../utils/getTypesOfMilk";
import { ActivityIndicator, View } from "react-native";

interface MilkTypeProps {
  setMilkType: React.Dispatch<React.SetStateAction<MilkTypes | undefined>>;
  milkType?: MilkTypes;
}

const MilkType = ({ milkType, setMilkType }: MilkTypeProps) => {
  const [typesOfMilk, setTypesOfMilk] = useState<MilkTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTypeOfMilks().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setTypesOfMilk(data.result);
        if (data.result.length > 0) {
          setMilkType(data.result[0]);
        }
        setIsLoading(false);
      }
    });
  }, []);

  const handleValueChange = (newMilkTypeName: string) => {
    const newMilkType = typesOfMilk.find(
      (type) => type.name === newMilkTypeName
    );
    setMilkType(newMilkType);
  };

  return (
    <VStack
      py={4}
      space={2}
      borderBottomWidth={2}
      borderBottomColor={"gray.300"}
    >
      <OptionalTitle title="Leite" />
      {isLoading ? (
        <ActivityIndicator size="large" color="#16a34a" />
      ) : (
        <Radio.Group
          name="milkType"
          onChange={handleValueChange}
          value={milkType?.name}
        >
          {typesOfMilk.map((type) => (
            <Optional title={type.name} price={type.price} key={type.id} />
          ))}
        </Radio.Group>
      )}
    </VStack>
  );
};
export default memo(MilkType);
