import { View, Text, StyleSheet } from 'react-native'

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello there</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 26
    }
})
