import { View } from 'react-native'
import { createArray, Divider } from '../../globals/utilities'
import Scroller from './helper'
import styles from './styles'

export default function ScrollerInput({ values, dispatch, reset }) {
    return (
        <View style={styles.scrollerContainer}>
            <Scroller
                data={createArray(24)}
                name={'hh'}
                index={values['hh']}
                dispatch={dispatch}
                reset={reset}
            />
            <Divider />
            <Scroller
                data={createArray(60)}
                name={'mm'}
                index={values['mm']}
                dispatch={dispatch}
                reset={reset}
            />
            <Divider />
            <Scroller
                data={createArray(60)}
                name={'ss'}
                index={values['ss']}
                dispatch={dispatch}
                reset={reset}
            />
        </View>
    )
}
