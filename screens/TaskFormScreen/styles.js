import { StyleSheet } from 'react-native'
import { moderateScale, scale } from 'react-native-size-matters'
import { flexBox, fontSize, colors } from '../../globals/GlobalStyles'

export default styles = StyleSheet.create({
    arrowContainer: {
        width: '100%',
        alignSelf: 'flex-start',
        marginBottom: moderateScale(10),
        marginLeft: moderateScale(10),
    },
    formContainer: {
        width: '100%',
    },
    priorityBtn: {
        ...flexBox.flex,
        flex: 1,
        height: scale(30),
        borderRadius: scale(15),
        borderWidth: 1.4,
        margin: moderateScale(10),
        overflow: 'hidden',
    },
    priorityBtnInner: {
        ...flexBox.flex,
        width: '100%',
        height: '100%',
        opacity: 0.5,
        position: 'absolute',
    },
    priorityBtnText: {
        fontWeight: 'bold',
        fontSize: fontSize.regular,
    },
    intervalScrollerContainer: {
        ...flexBox.flex,
        flex: 1,
        width: '100%',
        padding: moderateScale(10),
    },
    titleContainer: {
        ...flexBox.flexJcsb,
        flexDirection: 'row',
        width: '100%',
        marginBottom: moderateScale(20),
    },
    scroller: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: moderateScale(10),
    },
    numberBtn: {
        ...flexBox.flex,
        flex: 1,
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        marginHorizontal: moderateScale(10),
        width: moderateScale(60),
    },
    numberBtnText: {
        fontWeight: 'bold',
        fontSize: fontSize.regular,
        color: colors.text,
        textAlign: 'center',
        paddingHorizontal: moderateScale(10),
    },
})
