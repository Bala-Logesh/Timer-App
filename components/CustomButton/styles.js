import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import { colors, fontSize } from '../../globals/GlobalStyles'

export default styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: colors.lightBlue,
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(10),
        borderRadius: moderateScale(6),
        marginHorizontal: 10,
    },
    buttonSecondary: {
        backgroundColor: colors.darkBlue,
    },
    buttonText: {
        color: colors.text,
        fontSize: fontSize.regular,
        textAlign: 'center',
    },
    buttonTextSecondary: {
        color: colors.lightBlue,
    },
})
