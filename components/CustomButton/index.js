import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default function CustomButton({ text, secondary = false, onPress }) {
    return (
        <TouchableOpacity
            style={
                secondary
                    ? [styles.button, styles.buttonSecondary]
                    : styles.button
            }
            onPress={onPress}
        >
            <Text
                style={
                    secondary
                        ? [styles.buttonText, styles.buttonTextSecondary]
                        : styles.buttonText
                }
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}
