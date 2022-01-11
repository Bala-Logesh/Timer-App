import { useState } from 'react'
import {
    ContainerWrapper,
    ButtonsWrapper,
    CardWrapper,
} from '../../globals/wrappers'
import CustomButton from '../../components/CustomButton'
import TimerDisplay from '../../components/TimerDisplay'
import Task from '../../components/Task'
import ScrollerInput from '../../components/ScrollerInput'

export default function Timer() {
    const [time, setTime] = useState({
        hh: 12,
        mm: 12,
        ss: 12,
    })

    return (
        <ContainerWrapper>
            <CardWrapper direction={'row'}>
                <ScrollerInput values={time} setValues={setTime} />
            </CardWrapper>
            <TimerDisplay hr={time.hh} min={time.mm} sec={time.ss} />
            <ButtonsWrapper>
                <CustomButton text={'Stop'} secondary />
                <CustomButton text={'Pause'} />
            </ButtonsWrapper>
        </ContainerWrapper>
    )
}
