import { StyleSheet } from "react-native";
import { colors } from "../../colors";
import { fonts } from "../../fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: "45%",
    height: 148,
    elevation: 4,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    height: "60%",
    padding: 8,
  },
  title: {
    color: colors.blue[400],
    textAlign: "center",
    fontFamily: fonts.baiBold,
    textTransform: "uppercase",
    // fontSize: 16,
    fontSize: 14,
    
  },

  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "40%",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
