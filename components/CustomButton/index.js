import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default function CustomButton({
    text,
    secondary = false,
    onPress,
    deleteBtn = false,
}) {
    const allStyles = () => {
        if (secondary) {
            return [
                [styles.button, styles.buttonSecondary],
                [styles.buttonText, styles.buttonTextSecondary],
            ]
        } else if (deleteBtn) {
            return [
                [styles.button, styles.buttonDelete],
                [styles.buttonText, styles.buttonTextDelete],
            ]
        } else {
            return [styles.button, styles.buttonText]
        }
    }

    return (
        <TouchableOpacity style={allStyles()[0]} onPress={onPress}>
            <Text style={allStyles()[1]}>{text}</Text>
        </TouchableOpacity>
    )
}
