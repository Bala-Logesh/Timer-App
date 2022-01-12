import { StyleSheet } from 'react-native'
import { colors, fontSize, flexBox } from '../../globals/GlobalStyles'
import { moderateScale } from 'react-native-size-matters'

export default styles = StyleSheet.create({
    chartLines: {
        flex: 1,
        marginBottom: moderateScale(10),
        borderWidth: 2,
        borderTopColor: colors.lightBg,
        borderRightColor: colors.lightBg,
        borderBottomColor: colors.textLight,
        borderLeftColor: colors.textLight,
    },
    chartLinesContainer: {
        ...flexBox.flexJcseAife,
        flex: 1,
        flexDirection: 'row',
        marginVertical: moderateScale(10),
    },
    line: {
        width: 4,
        height: 100,
        borderRadius: moderateScale(2),
        marginTop: moderateScale(4),
        backgroundColor: colors.text,
    },
    xaxis: {
        ...flexBox.flexJcseAifs,
        flexDirection: 'row',
    },
    legendText: {
        fontSize: fontSize.small,
        color: colors.textLight,
        transform: [{ rotate: '-45deg' }],
    },
})
