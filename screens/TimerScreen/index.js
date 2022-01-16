import { useState, useContext, useEffect } from 'react'
import {
    ContainerWrapper,
    ButtonsWrapper,
    CardWrapper,
} from '../../globals/wrappers'
import CustomButton from '../../components/CustomButton'
import TimerDisplay from '../../components/TimerDisplay'
import Task from '../../components/Task'
import ScrollerInput from '../../components/ScrollerInput'
import { DataContext } from '../../context'
import { setTimerAction, resetTimerAction } from '../../reducers'

export default function Timer({ navigation }) {
    const {
        timer: { state, dispatch },
        task: {
            state: { task },
            dispatch: taskDispatch,
        },
    } = useContext(DataContext)

    const [intervalRef, setIntervalRef] = useState(null)
    const [isPaused, setIsPaused] = useState(true)
    const [isStopped, setIsStopped] = useState(false)
    const [reset, setReset] = useState(false)
    const startTimer = () => {
        setIsPaused(false)
        setIsStopped(false)
        isPaused && run()
        isPaused && setIntervalRef(setInterval(run, 1000))
    }

    let updatedS = state.ss
    let updatedM = state.mm
    let updatedH = state.hh

    useEffect(() => {
        task &&
            dispatch(
                setTimerAction({
                    hh: task.workIntervalHH,
                    mm: task.workIntervalMM,
                    ss: 0,
                })
            )
    }, [task])

    const run = () => {
        if (updatedM === 0 && updatedS === 0) {
            if (updatedH !== 0) {
                updatedH--
                updatedM = 59
                updatedS = 59
            } else {
                updatedM = 0
            }
        } else if (updatedS === 0) {
            if (updatedM !== 0) {
                updatedM--
                updatedS = 59
            } else {
                updatedS = 0
                clearInterval(intervalRef)
            }
        } else if (updatedS !== 0) {
            updatedS--
        }
        dispatch(setTimerAction({ hh: updatedH, mm: updatedM, ss: updatedS }))
    }

    const pauseTimer = () => {
        clearInterval(intervalRef)
        setIsPaused(true)
    }

    const stopTimer = () => {
        clearInterval(intervalRef)
        setIsPaused(true)
        setIsStopped(true)
    }

    const resetTimer = () => {
        setReset(true)
        dispatch(resetTimerAction())
        setIsStopped(false)
        setTimeout(() => setReset(false), 1000)
    }

    return (
        <ContainerWrapper>
            {task ? (
                <Task
                    data={{ ...task, selected: true }}
                    dispatch={taskDispatch}
                    navigation={navigation}
                />
            ) : (
                <CardWrapper direction={'row'}>
                    <ScrollerInput
                        values={state}
                        dispatch={dispatch}
                        reset={reset}
                    />
                </CardWrapper>
            )}

            <TimerDisplay hr={state.hh} min={state.mm} sec={state.ss} />
            <ButtonsWrapper>
                <CustomButton
                    text={isStopped ? 'Reset' : 'Stop'}
                    secondary
                    onPress={isStopped ? resetTimer : stopTimer}
                />
                <CustomButton
                    text={isPaused ? 'Start' : 'Pause'}
                    onPress={isPaused ? startTimer : pauseTimer}
                />
            </ButtonsWrapper>
        </ContainerWrapper>
    )
}
