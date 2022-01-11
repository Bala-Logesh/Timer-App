import { View, Text } from 'react-native'
import styles from './styles'

export default function TimerDisplay({ hr, min, sec }) {
    hr = hr === undefined ? '00' : hr < 10 ? `0${hr}` : hr
    min = min === undefined ? '00' : min < 10 ? `0${min}` : min
    sec = sec === undefined ? '00' : sec < 10 ? `0${sec}` : sec

    return (
        <View style={styles.timer}>
            <Text style={styles.timerText}>{hr + ':' + min + ':' + sec}</Text>
        </View>
    )
}
