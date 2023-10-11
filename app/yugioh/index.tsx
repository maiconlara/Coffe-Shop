import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from "react-native";
import { CardObject } from "./interface";
import { YugiohCard } from "../../src/components/YugiohCard";
import randomBlock from "../../src/assets/randomBlock.webp";
import deckCard from "../../src/assets/deckCard.png";

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./styles";
import { colors } from "../../src/colors";
import { data } from "./data";
import { DeckModal } from "../../src/components/DeckModal";

export default function Yugioh() {
  const [password, setPassword] = useState("");
  const [card, setCard] = useState<CardObject>();
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [deck, setDeck] = useState<CardObject[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${password}`;

  const cardImage = card?.data[0].card_images[0].image_url ?? "";

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomCard = data[randomIndex].password;
    setValue(randomCard.toString());
    setPassword(randomCard.toString());
  };

  const getCard = async () => {
    try {
      const response = await axios.get<CardObject>(url);
      if (response.status === 200) {
        const { data } = response;
        return data;
      } else {
      }
    } catch (error) {}
  };

  const handleCard = async () => {
    setIsLoading(true);
    const handledCard = await getCard();
    setCard(handledCard);
    setIsLoading(false);
  };

  const handleSelectedCard = async () => {
    setIsLoading(true);
    await addToDeck();
    setCard(undefined);
    setIsLoading(false);
  };
  const storeData = async (value: CardObject[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("deck", jsonValue);
    } catch (e) {}
  };

  const addToDeck = async () => {
    try {
      if (card) {
        setDeck((prevDeck) => [...prevDeck, card]);
      }
    } catch (error) {}
  };

  const createDeck = async () => {
    try {
      await storeData(deck);
      toggleModal();
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.random} onPress={getRandomCard}>
        <Image
          width={210}
          height={210}
          style={styles.block}
          source={randomBlock}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deck} onPress={toggleModal}>
        <Image
          width={210}
          height={210}
          style={styles.card}
          source={deckCard}
        ></Image>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        {!isLoading ? (
          <YugiohCard card={cardImage} />
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator color={colors.black} />
          </View>
        )}
      </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="ex. 54752875"
          style={styles.textInput}
          keyboardType="number-pad"
          onChangeText={(event) => {
            setPassword(event);
          }}
          maxLength={8}
        >
          {value}
        </TextInput>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.button}
            onPress={handleCard}
          >
            <Text style={styles.buttonText}>Buscar</Text>
          </TouchableOpacity>
          {cardImage && (
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.button}
              onPress={handleSelectedCard}
            >
              <Text style={styles.buttonText}>Escolher</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <DeckModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        deck={deck}
        setModalVisible={setModalVisible}
        createDeck={createDeck}
      />
    </View>
  );
}
