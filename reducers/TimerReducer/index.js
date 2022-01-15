import * as types from './types'

export const initialTimerState = { hh: 0, mm: 0, ss: 0 }

const TimerReducer = (state = initialTimerState, action) => {
    switch (action.type) {
        case types.SET_COUNTER:
            return { ...state, ...action.payload }
        case types.RESET_COUNTER:
            return initialTimerState
        default:
            return state
    }
}

export default TimerReducer
