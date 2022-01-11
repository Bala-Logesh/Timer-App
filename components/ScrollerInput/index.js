import { View } from 'react-native'
import { createArray } from '../../globals/utilities'
import Scroller from './helper'
import styles from './styles'

export default function ScrollerInput({ values, setValues }) {
    return (
        <View style={styles.scrollerContainer}>
            <Scroller
                data={createArray(24)}
                name={'hh'}
                index={values['hh']}
                setIndex={setValues}
            />
            <View style={styles.divider}></View>
            <Scroller
                data={createArray(60)}
                name={'mm'}
                index={values['mm']}
                setIndex={setValues}
            />
            <View style={styles.divider}></View>
            <Scroller
                data={createArray(60)}
                name={'ss'}
                index={values['ss']}
                setIndex={setValues}
            />
        </View>
    )
}
