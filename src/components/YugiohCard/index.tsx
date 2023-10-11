import React from "react";
import { Image } from "react-native";
import backCard from "../../assets/backCard.png";
import { styles } from "./styles";

interface YugiohCardProps {
  card: string;
}

export function YugiohCard({ card }: YugiohCardProps) {
  return (
    <>
      {card ? (
        <Image
          width={246}
          height={363}
          style={styles.card}
          source={{
            uri: card,
          }}
        ></Image>
      ) : (
        <Image
          width={246}
          height={363}
          style={styles.card}
          source={backCard}
        ></Image>
      )}
    </>
  );
}
