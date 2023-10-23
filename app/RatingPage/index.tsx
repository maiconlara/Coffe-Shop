import { Center, FlatList, HStack, StatusBar, Text, VStack } from 'native-base'
import RatingAverage from "../../src/components/RatingAvarege";
import Header from "../../src/components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Comment from '../../src/components/Comment';
import { Comments } from '../../src/interfaces/comments';
import { comments } from '../../src/mocks';
import { goBack } from '../../src/utils/handleNavigate';
import RatingContainer from '../../src/components/RatingComponents/RatingContainer';
import React from 'react';



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
  ]

const RatingPage = () => {

    return (
  <VStack paddingBottom={325}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header goBack={goBack} title="Fotos e avaliações" />
      <VStack px={8}>
       <RatingContainer rating={Rating} />
      </VStack>
      <FlatList
        data={comments}
        renderItem={({ item }) => <Comment data={item} />}
        keyExtractor={(item: Comments) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        px={8}
        pt={8}
      />
    </VStack>
    )
}
export default RatingPage;