import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { flexBox, fontSize, colors } from '../../globals/GlobalStyles'

export default styles = StyleSheet.create({
    scrollerContainer: {
        ...flexBox.flexJcse,
        flex: 1,
        height: fontSize.xxxlarge,
        flexDirection: 'row',
    },
    scrollerList: {
        ...flexBox.flexJcse,
        flex: 1,
        width: '100%',
        height: fontSize.xxxlarge,
    },
    scrollerText: {
        ...flexBox.flex,
        fontSize: fontSize.xxxlarge - moderateScale(6),
        height: fontSize.xxxlarge,
    },
    divider: {
        width: 2,
        height: '80%',
        backgroundColor: colors.textLight,
    },
})
