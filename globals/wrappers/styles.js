import { StyleSheet } from 'react-native'
import { flexBox, colors } from '../GlobalStyles'
import { moderateScale, scale } from 'react-native-size-matters'

export default styles = StyleSheet.create({
    container: {
        ...flexBox.flexJcsb,
        flex: 1,
        backgroundColor: colors.darkBg,
        padding: moderateScale(10),
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: moderateScale(14),
    },
    cardContainer: {
        width: '100%',
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(10),
        borderRadius: scale(10),
        marginVertical: moderateScale(6),
    },
})
