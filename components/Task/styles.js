import { StyleSheet } from 'react-native'
import { scale, moderateScale } from 'react-native-size-matters'
import { flexBox, fontSize } from '../../globals/GlobalStyles'

export default styles = StyleSheet.create({
    verticalTextContainer: {
        ...flexBox.flex,
    },
    taskCircle: {
        ...flexBox.flex,
        height: scale(24),
        width: scale(24),
        borderRadius: scale(12),
        borderWidth: 1.4,
        overflow: 'hidden',
    },
    taskCircleInner: {
        ...flexBox.flex,
        width: '100%',
        height: '100%',
        opacity: 0.5,
    },
    taskCircleIcon: {
        fontSize: fontSize.regular,
        position: 'absolute',
    },
    taskBody: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(14),
    },
})
