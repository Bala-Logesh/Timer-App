import { View, Text, FlatList, Pressable } from 'react-native'
import Task from '../../components/Task'
import { keyExtractor } from '../../globals/utilities'
import { GlobalStyles } from '../../globals/GlobalStyles'
import styles from './styles'

export default function TaskListContainer({
    title,
    data,
    flex = 1,
    value,
    setValue,
}) {
    return (
        <View style={[styles.list, { flex }]}>
            <LinkButton title={title} value={value} setValue={setValue} />
            {value && (
                <FlatList
                    data={data}
                    keyExtractor={keyExtractor}
                    renderItem={({ item }) => (
                        <Task
                            data={item}
                            onPress={() => console.warn('Pressed')}
                        />
                    )}
                />
            )}
        </View>
    )
}

export function LinkButton({ title, value, setValue }) {
    return (
        <View style={styles.titleContainer}>
            <Text style={GlobalStyles.subTitle2}>{title}</Text>
            <Pressable onPress={() => setValue(!value)}>
                <Text style={styles.linkText}>{value ? 'Hide' : 'Show'}</Text>
            </Pressable>
        </View>
    )
}

export function HorizontalText({ primary, secondary }) {
    return (
        <View style={styles.horizontalTextContainer}>
            <Text
                style={[
                    GlobalStyles.subTitle,
                    {
                        marginBottom: 0,
                    },
                ]}
            >
                {primary}
            </Text>
            <Text style={GlobalStyles.secondaryText}>{secondary}</Text>
        </View>
    )
}
