import { StyleSheet } from "react-native";
import { fonts } from "../../src/fonts";
import { colors } from "../../src/colors";

export const styles = StyleSheet.create({
  button: {
    marginTop: 48,
    alignItems: "center",
    minWidth: "40%",
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
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  text: {
    fontFamily: fonts.robotoBold,
    fontSize: 48,
    color: colors.blue.title,
  },
  textContainer: {
    gap: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 12,
  },
});
