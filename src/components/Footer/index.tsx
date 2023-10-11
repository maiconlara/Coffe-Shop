import React, { useState } from "react";
import { View, Text, Linking, Modal, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export function Footer() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleGitHubAccess = () => {
    Linking.openURL("https://www.github.com/maiconlara");
    setModalVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.footer}>
      <Text style={styles.text} onPress={toggleModal}>
        {" "}
        Feito com 💙 por Maicon Lara{" "}
      </Text>

      <View style={styles.container}>
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
                Você está acessando o meu GitHub, gostaria de continuar?
              </Text>
              {/* Your modal content */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={toggleModal}
                >
                  <Text style={styles.modalButtonText}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={handleGitHubAccess}
                >
                  <Text style={styles.modalButtonText}>Acessar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
