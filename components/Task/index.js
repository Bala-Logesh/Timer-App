import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import { CardWrapper } from '../../globals/wrappers'
import { VerticalText, Icons } from './components'

export default function Task({ data, onLeftPress, onRightPress }) {
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
                    primary={data.title}
                    secondary={data.interval}
                />
                <VerticalText
                    alignment={'flex-end'}
                    primary={data.tasks}
                    secondary={data.break}
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
