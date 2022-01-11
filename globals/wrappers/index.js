import { View } from 'react-native'
import styles from './styles'

export function ContainerWrapper({ children }) {
    return <View style={styles.container}>{children}</View>
}

export function ButtonsWrapper({ children }) {
    return <View style={styles.buttonContainer}>{children}</View>
}

export function CardWrapper({ children, direction, jc }) {
    return (
        <View
            style={[
                styles.cardContainer,
                { flexDirection: direction },
            ]}
        >
            {children}
        </View>
    )
}
