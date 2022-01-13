import { View, Text, useWindowDimensions } from 'react-native'
import styles from './styles'
import { colors, GlobalStyles } from '../GlobalStyles'
import { moderateScale } from 'react-native-size-matters'

export function ContainerWrapper({ children, noPaddingTop }) {
    const { height } = useWindowDimensions()

    return (
        <View
            style={[
                styles.container,
                {
                    paddingTop:
                        noPaddingTop || height < 820
                            ? moderateScale(40)
                            : moderateScale(80),
                },
            ]}
        >
            {children}
        </View>
    )
}

export function ButtonsWrapper({ children }) {
    return <View style={styles.buttonContainer}>{children}</View>
}

export function TitleWrapper({ children, title }) {
    return (
        <View style={styles.titleContainer}>
            <Text style={GlobalStyles.subTitle2}>{title}</Text>
            {children}
        </View>
    )
}

export function CardWrapper({
    children,
    direction,
    ai = 'center',
    flex = 0,
    noBgColor = false,
}) {
    return (
        <View
            style={[
                styles.cardContainer,
                {
                    flexDirection: direction,
                    alignItems: ai,
                    flex,
                    backgroundColor: noBgColor ? null : colors.lightBg,
                },
            ]}
        >
            {children}
        </View>
    )
}
