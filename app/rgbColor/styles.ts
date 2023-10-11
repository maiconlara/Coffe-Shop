import { StyleSheet } from "react-native";
import { colors } from "../../src/colors";
import { fonts } from "../../src/fonts";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 12,
  },
  button: {
    maxWidth: 120,
    alignItems: "center",
    minWidth: "auto",
    borderRadius: 9999,
    backgroundColor: colors.blue.button,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonText: {
    fontFamily: fonts.baiBold,
    fontSize: 14,
    textTransform: "uppercase",
    color: colors.white,
  },
  flatListContainer: {
    flexDirection: 'column',
    
    justifyContent: 'center', // Center items horizontally
  },
});
