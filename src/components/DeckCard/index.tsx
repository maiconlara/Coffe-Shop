import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { CardObject } from "../../../app/yugioh/interface";
import { CardInfo } from "./CardInfo";

interface DeckCardProps {
  cardInfo: CardObject;
}

export function DeckCard({ cardInfo }: DeckCardProps) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <TouchableOpacity onPress={toggleModal} activeOpacity={0.6} >
        <Image
          width={246}
          height={363}
          style={styles.card}
          source={{
            uri: cardInfo.data[0].card_images[0].image_url,
          }}
        ></Image>
      </TouchableOpacity>
      <CardInfo
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        setModalVisible={setModalVisible}
        cardInfo={cardInfo}
      />
    </>
  );
}
