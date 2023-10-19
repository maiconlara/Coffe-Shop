import { Center, FlatList, HStack, StatusBar, Text, VStack } from 'native-base'
import RatingAverage from "../../src/components/RatingAvarege";
import Header from "../../src/components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Comment from '../../src/components/Comment';
import { Comments } from '../../src/interfaces/comments';
import { comments } from '../../src/mocks';

const Rating = [
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
      <Header goBack={} title="Fotos e avaliações" />
      <VStack px={8}>
        <HStack
          borderBottomWidth={2}
          borderBottomColor={'gray.300'}
          paddingBottom={4}
          marginTop={8}
        >
          <Center justifyContent={'space-between'} w={'1/2'}>
            <Text fontSize="5xl" fontFamily="text" fontWeight="700">
              {ratingAverage().toFixed(1)}
            </Text>
            <HStack>
              {[1, 2, 3].map((item) => (
                <FontAwesomeIcon icon={faStar} key={item} color="#eab308" />
              ))}
              <FontAwesomeIcon icon={faStarHalfStroke} color="#eab308" />
            </HStack>
            <Text
              fontSize="md"
              fontFamily="text"
              fontWeight="400"
              color="gray.400"
            >
              (2.5k avaliações)
            </Text>
          </Center>
          <VStack
            borderLeftColor={'gray.300'}
            borderLeftWidth={2}
            paddingLeft={4}
          >
            {Rating.map((item) => (
              <RatingAverage
                key={item.id}
                starsQuantity={item.id}
                totalReviews={item.totalReviews}
              />
            ))}
          </VStack>
        </HStack>
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