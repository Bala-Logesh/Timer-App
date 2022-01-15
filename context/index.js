import { createContext, useReducer } from 'react'
import PersonalInfoReducer, {
    initialPersonalInfoState,
} from '../reducers/PersonalInfoReducer'
import TimerReducer, { initialTimerState } from '../reducers/TimerReducer'
import TaskReducer, { initialTaskState } from '../reducers/TaskReducer'

export const DataContext = createContext()

const ContextProviderWrapper = ({ children }) => {
    const TimerOp = useReducer(TimerReducer, initialTimerState)
    const PersonalInfoOp = useReducer(
        PersonalInfoReducer,
        initialPersonalInfoState
    )
    const TaskOp = useReducer(TaskReducer, initialTaskState)

    return (
        <DataContext.Provider
            value={{
                timer: { state: TimerOp[0], dispatch: TimerOp[1] },
                personalInfo: {
                    state: PersonalInfoOp[0],
                    dispatch: PersonalInfoOp[1],
                },
                task: {
                    state: TaskOp[0],
                    dispatch: TaskOp[1],
                },
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default ContextProviderWrapper
