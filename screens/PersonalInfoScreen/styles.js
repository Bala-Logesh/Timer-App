import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { colors } from '../../globals/GlobalStyles'

export default styles = StyleSheet.create({
    profileTop: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.darkBlue,
        borderRadius: moderateScale(6)
    },
    image: {
        height: '60%',
        borderRadius: moderateScale(500),
        aspectRatio: 1,
        backgroundColor: colors.textLight,
    },
    profileBottom: {
        flex: 2,
        width: '100%',
        paddingVertical: moderateScale(20),
        backgroundColor: colors.darkBg,
    },
})
