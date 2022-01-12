import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

export const colors = {
    darkBg: '#2D2D2D',
    lightBg: '#373737',
    darkBlue: '#36394C',
    lightBlue: '#6E7AF7',
    gray: '#5F5F5F',
    red: '#BC4E5F',
    yellow: '#BD9B4E',
    green: '#48A15E',
    text: '#FDFDFD',
    textLight: '#929292',
}

export const fontSize = {
    small: moderateScale(12),
    regular: moderateScale(16),
    large: moderateScale(20),
    xlarge: moderateScale(29),
    xxlarge: moderateScale(40),
    xxxlarge: moderateScale(50),
    xxxxlarge: moderateScale(60),
}

export const flexBox = StyleSheet.create({
    flex: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexJcfs: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    flexJcsb: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flexJcse: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    flexJcseAifs: {
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },
    flexJcseAife: {
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
    },
})

export const GlobalStyles = StyleSheet.create({
    navigationContainer: {
        ...flexBox.flex,
        backgroundColor: colors.darkBg,
    },
    container: {
        ...flexBox.flexJcfs,
        backgroundColor: colors.darkBg,
        padding: moderateScale(10),
        paddingTop: moderateScale(40),
    },
    title: {
        fontSize: fontSize.xxlarge,
        fontWeight: 'bold',
        color: colors.text,
        alignSelf: 'flex-start',
        marginBottom: moderateScale(10),
    },
    subTitle: {
        fontSize: fontSize.xlarge,
        fontWeight: 'bold',
        color: colors.text,
        alignSelf: 'flex-start',
        marginBottom: moderateScale(10),
    },
    subTitle2: {
        fontSize: fontSize.large,
        fontWeight: 'bold',
        color: colors.text,
        alignSelf: 'flex-start',
        marginBottom: moderateScale(10),
    },
    primaryText: {
        fontSize: fontSize.regular,
        color: colors.text,
    },
    secondaryText: {
        fontSize: fontSize.regular,
        color: colors.textLight,
    },
    divider: {
        width: 2,
        height: '80%',
        backgroundColor: colors.textLight,
    },
})
