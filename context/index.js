import { createContext, useReducer } from 'react'
import PersonalInfoReducer, {
    initialPersonalInfoState,
} from '../reducers/PersonalInfoReducer'
import TimerReducer, { initialTimerState } from '../reducers/TimerReducer'

export const DataContext = createContext()

const ContextProviderWrapper = ({ children }) => {
    const TimerOp = useReducer(TimerReducer, initialTimerState)
    const PersonalInfoOp = useReducer(
        PersonalInfoReducer,
        initialPersonalInfoState
    )

    return (
        <DataContext.Provider
            value={{
                timer: { state: TimerOp[0], dispatch: TimerOp[1] },
                personalInfo: {
                    state: PersonalInfoOp[0],
                    dispatch: PersonalInfoOp[1],
                },
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default ContextProviderWrapper
