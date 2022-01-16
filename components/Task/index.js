import React from 'react'
import { Pressable } from 'react-native'
import styles from './styles'
import { CardWrapper } from '../../globals/wrappers'
import { VerticalText, Icons } from './components'
import { completeTaskAction, selectTaskAction } from '../../reducers'

export default function Task({ data, dispatch, navigation }) {
    const onLeftPress = () => {
        dispatch(completeTaskAction(data.id))
    }

    const onRightPress = () => {
        dispatch(selectTaskAction(data.id))
        if (data.selected) {
            navigation.navigate('List')
        } else {
            navigation.navigate('Timer')
        }
    }

    return (
        <CardWrapper direction={'row'}>
            <Icons
                side={'left'}
                completed={data.completed}
                priority={data.priority}
                onPress={onLeftPress}
            />
            <Pressable
                style={styles.taskBody}
                onLongPress={() => {
                    navigation.navigate('Form', { id: data.id })
                }}
            >
                <VerticalText
                    alignment={'flex-start'}
                    primary={data.name}
                    secondary={`${data.workIntervalHH} hr ${data.workIntervalMM} min`}
                />
                <VerticalText
                    alignment={'flex-end'}
                    primary={`${data.completedIntervals}/${data.taskInterval}`}
                    secondary={`${data.break} min`}
                />
            </Pressable>
            <Icons
                navigation={navigation}
                side={'right'}
                selected={data.selected}
                onPress={onRightPress}
            />
        </CardWrapper>
    )
}
