import * as types from './types'

export const setTimerAction = timeValues => {
    return {
        type: types.SET_COUNTER,
        payload: timeValues,
    }
}

export const resetTimerAction = () => {
    console.log('called')
    return {
        type: types.RESET_COUNTER,
    }
}
