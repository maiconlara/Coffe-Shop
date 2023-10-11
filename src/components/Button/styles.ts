import { StyleSheet } from "react-native";
import { colors } from "../../colors";
import { fonts } from "../../fonts";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    minWidth: "auto",
    borderRadius: 9999,
    backgroundColor: colors.blue.button,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "400",
    fontFamily: fonts.baiBold,
  },
});
