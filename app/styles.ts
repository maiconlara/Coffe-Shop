import { StyleSheet } from "react-native";
import { colors } from "../src/colors";
import { fonts } from "../src/fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  title: {
    textAlign: "center",
    fontFamily: fonts.baiBold,
    color: colors.blue.title,
    textTransform: "uppercase",
    fontSize: 48,
  },

});
