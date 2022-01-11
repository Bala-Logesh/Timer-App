import { View, Text, Pressable } from 'react-native'
import { getColor } from '../../globals/utilities'
import { GlobalStyles } from '../../globals/GlobalStyles'
import { FontAwesome } from '@expo/vector-icons'
import styles from './styles'

export function VerticalText({ alignment, primary, secondary }) {
    return (
        <View style={[styles.verticalTextContainer, { alignItems: alignment }]}>
            <Text style={GlobalStyles.primaryText}>{primary}</Text>
            <Text style={GlobalStyles.secondaryText}>{secondary}</Text>
        </View>
    )
}

export const Icons = ({ side, selected, completed, priority, onPress }) => {
    let finalColor

    if (priority === 'High') {
        finalColor = getColor('red')
    } else if (priority === 'Medium') {
        finalColor = getColor('yellow')
    } else if (priority === 'Low') {
        finalColor = getColor('green')
    } else if (side === 'right' && selected === false) {
        finalColor = getColor('blue')
    } else if (side === 'right' && selected === true) {
        finalColor = getColor('gray')
    }

    let name

    if (side === 'right') {
        name = selected ? 'close' : 'play'
    } else if (side === 'left') {
        name = completed && 'check'
    }

    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.taskCircle,
                {
                    borderColor: finalColor,
                },
            ]}
        >
            <FontAwesome
                name={name}
                style={[
                    styles.taskCircleIcon,
                    {
                        color: finalColor,
                    },
                ]}
            />
            <View
                style={[
                    styles.taskCircleInner,
                    {
                        backgroundColor: side === 'right' ? null : finalColor,
                    },
                ]}
            ></View>
        </Pressable>
    )
}
