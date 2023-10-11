import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { CardObject } from "../../../app/yugioh/interface";

interface ModalProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  deck: CardObject[];
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  createDeck: () => void;
}

export function DeckModal({
  isModalVisible,
  toggleModal,
  deck,
  setModalVisible,
  createDeck,
}: ModalProps) {
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
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Você quer resgatar este deck? ele possui {deck.length} cartas
            </Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={createDeck}
              >
                <Text style={styles.modalButtonText}>Sim</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
                <Text style={styles.modalButtonText}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
