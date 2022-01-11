import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { colors, flexBox, fontSize } from '../../globals/GlobalStyles'

export default styles = StyleSheet.create({
    taskListContainer: {
        flex: 1,
        width: '100%',
    },
    list: {
        width: '100%',
        marginTop: moderateScale(10),
        marginVertical: moderateScale(10),
    },
    titleContainer: {
        ...flexBox.flexJcsb,
        flexDirection: 'row',
        width: '100%',
    },
    horizontalTextContainer: {
        ...flexBox.flexJcse,
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        width: '100%',
    },
    linkText: {
        fontSize: fontSize.regular,
        color: colors.lightBlue
    }
})
