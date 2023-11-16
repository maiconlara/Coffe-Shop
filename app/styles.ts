import { StyleSheet } from "react-native";
import { colors } from "../src/colors";
import { fonts } from "../src/fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 48,
  },
  title: {
    fontFamily: fonts.fontConfig.Urbanist[700].normal,
    textAlign: "center",
    color: colors.bg,
    textTransform: "uppercase",
    fontSize: 36,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "column",
    gap: 8,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: 200,
    paddingHorizontal: 56,
  },
  input: {
    backgroundColor: colors.white,
    paddingLeft: 12,
    borderWidth: 1,
    borderColor: colors.bg,
    height: 40,
    width: "100%",
    minWidth: 165,
    fontFamily: fonts.fontConfig.Urbanist[500].normal,
    borderRadius: 16,
  },
  button: {
    marginTop: 16,
    alignItems: "center",
    minWidth: 150,
    width: "100%",
    borderRadius: 24,
    backgroundColor: colors.bg,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  buttonText: {
    fontFamily: fonts.fontConfig.Urbanist[700].normal,
    fontSize: 14,
    textTransform: "uppercase",
    color: colors.white,
  },
});
