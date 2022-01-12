import { View } from 'react-native'
import styles from './styles'
import { colors } from '../GlobalStyles'
import { moderateScale } from 'react-native-size-matters'

export function ContainerWrapper({ children, noPaddingTop }) {
    return (
        <View
            style={[
                styles.container,
                {
                    paddingTop: noPaddingTop
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
