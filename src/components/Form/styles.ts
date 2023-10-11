import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { fonts } from "../../fonts";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 12,
    top: getStatusBarHeight() - 64,
  },
  containerDiv: {
    alignItems: "center",
    gap: 6,
    marginTop: 20,
  },
  textTitle: {
    position: "absolute",
    top: -40,
    color: colors.gray,
    fontSize: 20,
    fontFamily: fonts.robotoBold,
  },

});
