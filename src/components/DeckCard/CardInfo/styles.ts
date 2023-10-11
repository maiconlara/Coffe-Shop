import { StyleSheet } from "react-native";
import { fonts } from "../../../fonts";
import { colors } from "../../../colors";

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
    // backgroundColor: "#ccb37a",
    borderRadius: 12,
    paddingBottom: 24,
    paddingHorizontal: 24,
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
  modalTitle: {
    marginBottom: 4,
    fontSize: 18,
    textAlign: "center",
    fontFamily: fonts.baiBold,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 4,
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
    color: colors.black,
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase",
  },
  modalCard: {
    marginBottom: 20,
    width: 250,
    height: 250,
  },
});
