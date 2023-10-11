import { FlatList, Image } from "react-native";
import { styles } from "./styles";

import { data } from "./data";

export default function exercicioAula05() {
  return (
    <FlatList
      data={data}
      numColumns={4}
      keyExtractor={(data) => data.url}
      renderItem={({ item }) => (
        <Image
          width={90}
          height={90}
          source={{
            uri: item.url,
          }}
          alt=""
          key={item.id}
        ></Image>
      )}
      contentContainerStyle={styles.container}
    ></FlatList>
  );
}
