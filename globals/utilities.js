import { View } from 'react-native'
import { colors, GlobalStyles } from './GlobalStyles'

export const getColor = color => {
    switch (color) {
        case 'red':
            return colors.red
        case 'green':
            return colors.green
        case 'yellow':
            return colors.yellow
        case 'blue':
            return colors.lightBlue
        case 'white':
            return colors.text
        case 'gray':
            return colors.textLight
        default:
            return '#000'
    }
}

export const createArray = (end, start = 0) => {
    let arr = []
    for (let i = start; i < end; i++) {
        arr.push(i)
    }
    return arr
}

export function keyExtractor(_, index) {
    return index.toString()
}

export function Divider() {
    return <View style={GlobalStyles.divider}></View>
}

export const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]
