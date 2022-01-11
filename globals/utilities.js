import { colors } from './GlobalStyles'

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
