import React from "react";
import { View, Modal, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";
import { CardObject } from "../../../../app/yugioh/interface";
import { typeColor } from "./typeColor";

interface CardInfoProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  cardInfo: CardObject;
}

export function CardInfo({
  isModalVisible,
  toggleModal,
  setModalVisible,
  cardInfo,
}: CardInfoProps) {
  const { name, atk, def, race, attribute, type } = cardInfo.data[0];
  const { image_url_cropped } = cardInfo.data[0].card_images[0];
  const cardColor = typeColor(type);

  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { backgroundColor: cardColor }]}>
            <Text style={styles.modalTitle}>{name}</Text>
            <Image
              source={{ uri: image_url_cropped }}
              alt=""
              width={624}
              height={624}
              style={styles.modalCard}
            ></Image>
            {attribute ? (
              <Text style={styles.modalText}>{`[${race} / ${attribute}]`}</Text>
            ) : (
              <Text style={styles.modalText}>{`[${race}]`}</Text>
            )}
            {atk && def ? (
              <Text
                style={styles.modalText}
              >{`ATK: ${atk} / DEF: ${def}`}</Text>
            ) : (
              <Text style={styles.modalText}>{type}</Text>
            )}
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={toggleModal}
              >
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
