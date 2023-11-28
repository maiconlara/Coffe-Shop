import { FlatList, StatusBar, VStack } from "native-base";
import Header from "../../src/components/Header";
import Comment from "../../src/components/Comment";
import { goBack } from "../../src/utils/handleNavigate";
import RatingContainer from "../../src/components/RatingComponents/RatingContainer";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CoffeeShop } from "../../src/utils/getCoffeeShops";
import {
  Comment as CommentType,
  getComments,
} from "../../src/utils/getComments";

export interface RatingType {
  id: number;
  totalReviews: number;
}

const Rating: RatingType[] = [
  {
    id: 1,
    totalReviews: 10,
  },
  {
    id: 2,
    totalReviews: 30,
  },
  {
    id: 3,
    totalReviews: 40,
  },
  {
    id: 4,
    totalReviews: 60,
  },
  {
    id: 5,
    totalReviews: 80,
  },
];

const RatingPage = () => {
  const [data, setData] = useState<CoffeeShop>();
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("coffeeshop");
        const parsedData = jsonValue != null ? JSON.parse(jsonValue) : [];
        setData(parsedData);
      } catch (e) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    getComments().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setComments(data.result);
      }
    });
  }, []);

  return (
    <VStack paddingBottom={325}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header goBack={goBack} title="Fotos e avaliações" />
      <VStack px={8}>
        <RatingContainer ratingNumber={data?.rating} rating={Rating} />
      </VStack>
      <FlatList
        data={comments}
        renderItem={({ item }) => <Comment data={item} />}
        keyExtractor={(item: CommentType) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        px={8}
        pt={8}
      />
    </VStack>
  );
};
export default RatingPage;
