import { useState, useContext } from 'react'
import { Text, View } from 'react-native'
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
import { DataContext } from '../../context'

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

    const {
        task: { state, dispatch },
    } = useContext(DataContext)

    let notCompletedTasks = state.tasks.filter(task => task.completed !== true)
    let completedTasks = state.tasks.filter(task => task.completed === true)

    const calcHours = () => {
        let totalMinutes = state.tasks.reduce((previousValue, task) => {
            if (task.completed === true) {
                return previousValue
            } else {
                return (
                    previousValue +
                    task.workIntervalMM +
                    task.workIntervalHH * 60
                )
            }
        }, 0)
        const minutes = totalMinutes % 60
        const hours = (totalMinutes - minutes) / 60
        return `${hours}:${minutes}`
    }

    return (
        <ContainerWrapper>
            <Text style={GlobalStyles.title}>Today</Text>
            <CardWrapper direction={'row'}>
                <HorizontalText
                    primary={calcHours()}
                    secondary={'Estimated\nTime(h)'}
                />
                <Divider />
                <HorizontalText
                    primary={state.tasks.length}
                    secondary={'Total task\nin project'}
                />
            </CardWrapper>
            <View style={styles.taskListContainer}>
                <TaskListContainer
                    data={notCompletedTasks}
                    title={'All Tasks'}
                    flex={1.6}
                    value={showAllTasks}
                    dispatch={dispatch}
                    navigation={navigation}
                    setValue={setShowAllTasks}
                />
                <TaskListContainer
                    data={completedTasks}
                    title={'Completed'}
                    value={showCompletedTasks}
                    dispatch={dispatch}
                    navigation={navigation}
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
