import { createContext, useReducer } from 'react'
import TimerReducer, { initialTimerState } from '../reducers/TimerReducer'

export const DataContext = createContext()

const ContextProviderWrapper = ({ children }) => {
    const TimerOp = useReducer(TimerReducer, initialTimerState)

    return (
        <DataContext.Provider
            value={{ timer: { state: TimerOp[0], dispatch: TimerOp[1] } }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default ContextProviderWrapper
