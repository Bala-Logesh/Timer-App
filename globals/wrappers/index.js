import { View } from 'react-native'
import styles from './styles'

export function ContainerWrapper({ children }) {
    return (
        <View style={styles.container}>
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
    ai,
    flex = 0,
}) {
    return (
        <View
            style={[
                styles.cardContainer,
                {
                    flexDirection: direction,
                    alignItems: ai,
                    flex,
                },
            ]}
        >
            {children}
        </View>
    )
}
