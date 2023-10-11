import { StyleSheet } from 'react-native';
import { colors } from '../../../colors';
import { fonts } from '../../../fonts';

export const styles = StyleSheet.create({
    container: {
        
      },
      containerDiv: {
        alignItems: "center",
        gap: 6,
        marginTop: 20,
      },
      text: {
        color: colors.gray,
        fontFamily: fonts.roboto,
      },
      textInput: {
        backgroundColor: "#fff",
        height: 40,
        width: '100%',
        maxWidth: 165,
        borderRadius: 6,
        fontFamily: fonts.roboto,
      },

});