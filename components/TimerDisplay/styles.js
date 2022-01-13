import { StyleSheet, Platform } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

import { colors, flexBox, fontSize } from '../../globals/GlobalStyles'

export default styles = StyleSheet.create({
    timer: {
        ...flexBox.flex,
        flex: 0,
        width: Platform.isPad ? '64%' : '90%',
        borderRadius: 1000,
        aspectRatio: 1,
        borderWidth: moderateScale(16),
        borderColor: colors.lightBg,
    },
    timerText: {
        fontSize: fontSize.xxxxlarge,
        fontWeight: 'bold',
        color: colors.text,
    },
})
