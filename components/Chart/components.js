import { Text, View } from 'react-native'
import { flexBox, GlobalStyles } from '../../globals/GlobalStyles'
import styles from './styles'

export function ChartLine({ value, index, max }) {
    return (
        <View key={index} style={flexBox.flex}>
            <Text style={GlobalStyles.secondaryText}>{value}</Text>
            <View
                style={[
                    styles.line,
                    {
                        height: `${value * (100 / max)}%`,
                    },
                ]}
            ></View>
        </View>
    )
}
