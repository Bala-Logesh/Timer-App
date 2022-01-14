import { useState } from 'react'
import {
    ContainerWrapper,
    ButtonsWrapper,
    CardWrapper,
} from '../../globals/wrappers'
import CustomButton from '../../components/CustomButton'
import TimerDisplay from '../../components/TimerDisplay'
import ScrollerInput from '../../components/ScrollerInput'

export default function Timer() {
    const [time, setTime] = useState({
        hh: 0,
        mm: 0,
        ss: 0,
    })

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

    let updatedS = time.ss
    let updatedM = time.mm
    let updatedH = time.hh

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
        setTime(prev => ({ ...prev, hh: updatedH, mm: updatedM, ss: updatedS }))
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
        setTime(prev => ({ ...prev, hh: 0, mm: 0, ss: 0 }))
        setIsStopped(false)
        setTimeout(() => setReset(false), 1000)
    }

    return (
        <ContainerWrapper>
            <CardWrapper direction={'row'}>
                <ScrollerInput values={time} setValues={setTime} reset={reset} />
            </CardWrapper>

            <TimerDisplay hr={time.hh} min={time.mm} sec={time.ss} />
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
