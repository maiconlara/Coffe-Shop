import { StyleSheet } from "react-native";
import { fonts } from "../../fonts";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalText: {
    marginBottom: 16,
    fontSize: 18,
    textAlign: "center",
    fontFamily: fonts.roboto,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    gap: 16,
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  modalButtonText: {
    fontFamily: fonts.baiBold,
    color: colors.blue.button,
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
