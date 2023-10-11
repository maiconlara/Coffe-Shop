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
  formContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  textInput: {
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    height: 40,
    minWidth: 200,
    width: "100%",
    maxWidth: 165,
    borderRadius: 6,
    fontFamily: fonts.roboto,
  },
  random: {
    marginLeft: 4,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 16,
    right: 16,
    width: 20,
    height: 20,
  },
  block: {
    width: 30,
    height: 30,
  },
  deck: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 16,
    left: 16,
    width: 20,
    height: 20,
  },
  card: {
    width: 40,
    height: 40,
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    width: 246,
    height: 363,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
});
