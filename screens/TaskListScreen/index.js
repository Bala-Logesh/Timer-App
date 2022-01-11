import { useState } from 'react'
import { Text, View, Pressable } from 'react-native'
import {
    ContainerWrapper,
    ButtonsWrapper,
    CardWrapper,
} from '../../globals/wrappers'
import CustomButton from '../../components/CustomButton'
import styles from './styles'
import { GlobalStyles } from '../../globals/GlobalStyles'
import { Divider } from '../../globals/utilities'
import TaskListContainer, { HorizontalText } from './components'

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

export default function TaskList({ navigation }) {
    const [showAllTasks, setShowAllTasks] = useState(true)
    const [showCompletedTasks, setShowCompletedTasks] = useState(true)

    return (
        <ContainerWrapper>
            <Text style={GlobalStyles.title}>Today</Text>
            <CardWrapper direction={'row'}>
                <HorizontalText
                    primary={15.45}
                    secondary={'Estimated\nTime(h)'}
                />
                <Divider />
                <HorizontalText
                    primary={4}
                    secondary={'Total task\nin project'}
                />
            </CardWrapper>
            <View style={styles.taskListContainer}>
                <TaskListContainer
                    data={data}
                    title={'All Tasks'}
                    flex={1.6}
                    value={showAllTasks}
                    setValue={setShowAllTasks}
                />
                <TaskListContainer
                    data={data}
                    title={'Completed'}
                    value={showCompletedTasks}
                    setValue={setShowCompletedTasks}
                />
            </View>
            <ButtonsWrapper>
                <CustomButton
                    text={'+ Add New Task'}
                    onPress={() => navigation.navigate('Form')}
                />
            </ButtonsWrapper>
        </ContainerWrapper>
    )
}
