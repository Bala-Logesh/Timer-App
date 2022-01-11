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

    const data = [
        {
            title: 'Mobile App Design',
            interval: '1 hr 30 min',
            tasks: '1/4',
            break: '25 min',
            priority: 'High',
            selected: true,
            completed: true,
        },
        {
            title: 'Mobile App Design',
            interval: '1 hr 30 min',
            tasks: '1/4',
            break: '25 min',
            priority: 'Medium',
            selected: false,
            completed: true,
        },
        {
            title: 'Mobile App Design',
            interval: '1 hr 30 min',
            tasks: '1/4',
            break: '25 min',
            priority: 'Low',
            selected: true,
            completed: true,
        },
    ]

    return (
        <ContainerWrapper>
            <Task data={data[0]} onPress={() => console.warn('Pressed')} />
            {/* <Task data={data[1]} onPress={() => console.warn('Pressed')} /> 
            toggle ? <Task data={data[2]} onPress={() => console.warn('Pressed')} /> */}
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
