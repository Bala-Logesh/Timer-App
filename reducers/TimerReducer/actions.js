import * as types from './types'

export const setTimerAction = timeValues => {
    return {
        type: types.SET_COUNTER,
        payload: timeValues,
    }
}

export const resetTimerAction = () => {
    return {
        type: types.RESET_COUNTER,
    }
}
