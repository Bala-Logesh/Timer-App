import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import { CardWrapper } from '../../globals/wrappers'
import { VerticalText, Icons } from './components'
import { completeTaskAction, selectTaskAction } from '../../reducers'

export default function Task({ data, dispatch }) {
    const onLeftPress = () => {
        dispatch(completeTaskAction(data.id))
    }

    const onRightPress = () => {
        dispatch(selectTaskAction(data.id))
    }

    return (
        <CardWrapper direction={'row'}>
            <Icons
                side={'left'}
                completed={data.completed}
                priority={data.priority}
                onPress={onLeftPress}
            />
            <View style={styles.taskBody}>
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
            </View>
            <Icons
                side={'right'}
                selected={data.selected}
                onPress={onRightPress}
            />
        </CardWrapper>
    )
}
