import { Pressable, Text, View, FlatList } from 'react-native'
import { createArray, getColor, keyExtractor } from '../../globals/utilities'
import { GlobalStyles, colors } from '../../globals/GlobalStyles'
import styles from './styles'
import { moderateScale } from 'react-native-size-matters'

export function PriorityButton({ priority, onPress, selected }) {
    let finalColor

    if (selected && priority === 'High') {
        finalColor = getColor('red')
    } else if (selected && priority === 'Medium') {
        finalColor = getColor('yellow')
    } else if (selected && priority === 'Low') {
        finalColor = getColor('green')
    } else {
        finalColor = getColor('gray')
    }

    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.priorityBtn,
                {
                    borderColor: finalColor,
                },
            ]}
        >
            <Text style={[styles.priorityBtnText, { color: finalColor }]}>
                {priority}
            </Text>
            <View
                style={[
                    styles.priorityBtnInner,
                    { backgroundColor: finalColor },
                ]}
            ></View>
        </Pressable>
    )
}

export function IntervalScroller({
    title1,
    title2,
    start,
    end,
    state,
    setState,
    name,
}) {
    return (
        <View style={styles.intervalScrollerContainer}>
            <View style={styles.titleContainer}>
                <Text style={GlobalStyles.primaryText}>{title1}</Text>
                <Text style={GlobalStyles.secondaryText}>{title2}</Text>
            </View>
            <FlatList
                horizontal={true}
                keyExtractor={keyExtractor}
                showsHorizontalScrollIndicator={false}
                data={createArray(end, start)}
                style={GlobalStyles.scroller}
                bounces={false}
                renderItem={({ item }) => (
                    <NumBtn
                        val={item}
                        state={state}
                        setState={setState}
                        name={name}
                    />
                )}
            />
        </View>
    )
}

const NumBtn = ({ val, setState, state, name }) => {
    return (
        <Pressable
            onPress={() => setState(prev => ({ ...prev, [name]: val }))}
            style={[
                styles.numberBtn,
                {
                    backgroundColor: val === state ? colors.lightBlue : null,
                },
            ]}
        >
            <Text style={styles.numberBtnText}>{val}</Text>
        </Pressable>
    )
}
