import { useState } from 'react'
import { ContainerWrapper, ButtonsWrapper } from '../../globals/wrappers'
import CustomButton from '../../components/CustomButton'
import TimerDisplay from '../../components/TimerDisplay'
import Task from '../../components/Task'

export default function Timer() {
    const [time, setTime] = useState({
        hr: 12,
        min: 12,
        sec: 12,
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
            completed: false,
        },
    ]

    return (
        <ContainerWrapper>
            <Task data={data[0]} onPress={() => console.warn('Pressed')} />
            <Task data={data[1]} onPress={() => console.warn('Pressed')} />
            <Task data={data[2]} onPress={() => console.warn('Pressed')} />
            <TimerDisplay hr={time.hr} min={time.min} sec={time.sec} />
            <ButtonsWrapper>
                <CustomButton text={'Stop'} secondary />
                <CustomButton text={'Pause'} />
            </ButtonsWrapper>
        </ContainerWrapper>
    )
}
