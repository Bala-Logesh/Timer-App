import { useState, useContext, useEffect } from 'react'
import { Pressable, Text, ScrollView, View, Platform } from 'react-native'
import {
    ContainerWrapper,
    CardWrapper,
    ButtonsWrapper,
    TitleWrapper,
} from '../../globals/wrappers'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import CustomButton from '../../components/CustomButton'
import { MaterialIcons } from '@expo/vector-icons'
import { fontSize, colors, GlobalStyles } from '../../globals/GlobalStyles'
import CustomInput from '../../components/CustomInput'
import styles from './styles'
import { PriorityButton, IntervalScroller } from './components'
import { priorities, intervals, initialFormData } from './extras'
import { DataContext } from '../../context'
import { addTaskAction, editTaskAction, deleteTaskAction } from '../../reducers'

export default function TaskForm({ route, navigation }) {
    const {
        task: { state, dispatch },
    } = useContext(DataContext)

    const [editTask, setEditTask] = useState(false)
    const [formData, setFormData] = useState(initialFormData)
    const [dateTime, setDateTime] = useState(new Date())
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (route.params?.id) {
            setFormData(state.tasks.find(task => task.id === route.params.id))
            setEditTask(true)
        }
    }, [])

    const onChange = (event, selectedDate) => {
        if (event.type === 'set' || Platform.OS === 'ios') {
            let date = moment(selectedDate).format('DD/MM/YYYY')
            let time = moment(selectedDate).format('hh:mm A')
            let value = mode === 'date' ? date : time
            setFormData(prev => ({ ...prev, [mode]: value }))
            const currentDate = selectedDate || date
            setDateTime(currentDate)
            setShow(false)
        }
    }

    const onPressHandler = () => {
        if (editTask) {
            dispatch(editTaskAction(formData))
            setEditTask(false)
        } else {
            dispatch(addTaskAction(formData))
        }
        navigation.goBack()
    }

    const onPressDeleteHandler = () => {
        if (editTask) {
            dispatch(deleteTaskAction(formData.id))
            setEditTask(false)
        }
        navigation.goBack()
    }

    const showMode = currentMode => {
        setShow(true)
        setMode(currentMode)
    }

    const modeChangeHandler = modeToShow => {
        showMode(modeToShow)
    }

    return (
        <ContainerWrapper>
            <Pressable
                onPress={() => navigation.goBack()}
                style={styles.arrowContainer}
            >
                <MaterialIcons
                    name='arrow-back-ios'
                    size={fontSize.xlarge}
                    color={colors.textLight}
                />
            </Pressable>
            <Text style={GlobalStyles.title}>New Task</Text>
            <ScrollView
                style={styles.formContainer}
                bounces={false}
                showsVerticalScrollIndicator={false}
            >
                <CustomInput
                    value={formData.name}
                    title={'name'}
                    showTitle={false}
                    placeHolder={'Task name'}
                    setValue={setFormData}
                    editable={true}
                />
                <CustomInput
                    value={formData.description}
                    title={'description'}
                    showTitle={false}
                    placeHolder={'Short description'}
                    setValue={setFormData}
                    editable={true}
                />
                <TitleWrapper title={'Task Priority'}>
                    <CardWrapper direction={'row'}>
                        {priorities.map((priority, index) => (
                            <PriorityButton
                                key={index}
                                priority={priority}
                                onPress={setFormData}
                                onPress={() =>
                                    setFormData(prev => ({
                                        ...prev,
                                        priority: priority,
                                    }))
                                }
                                selected={formData.priority === priority}
                            />
                        ))}
                    </CardWrapper>
                </TitleWrapper>
                <TitleWrapper title={'Date and Time'}>
                    <ButtonsWrapper>
                        <CustomInput
                            value={formData.date}
                            showTitle={false}
                            editable={false}
                            flex
                        />
                        <CustomInput
                            value={formData.time}
                            showTitle={false}
                            editable={false}
                            flex
                        />
                    </ButtonsWrapper>
                    <ButtonsWrapper>
                        <CustomButton
                            text={'Pick a date'}
                            onPress={() => modeChangeHandler('date')}
                        />
                        <CustomButton
                            text={'Pick a time'}
                            secondary
                            onPress={() => modeChangeHandler('time')}
                        />
                    </ButtonsWrapper>
                </TitleWrapper>
                <View>
                    {show && (
                        <DateTimePicker
                            testID='dateTimePicker'
                            value={dateTime}
                            mode={mode}
                            is24Hour={true}
                            display='default'
                            onChange={onChange}
                        />
                    )}
                </View>
                <TitleWrapper title={'Interval Settings'}>
                    <CardWrapper>
                        {intervals.map((item, index) => (
                            <IntervalScroller
                                key={index}
                                title1={item.title1}
                                title2={item.title2}
                                start={item.start}
                                end={item.end}
                                state={formData[item.name]}
                                name={item.name}
                                setState={setFormData}
                            />
                        ))}
                    </CardWrapper>
                </TitleWrapper>
                <ButtonsWrapper>
                    <CustomButton
                        text={`${editTask ? 'Edit' : 'Save'} the task`}
                        onPress={onPressHandler}
                    />
                    {editTask && (
                        <CustomButton
                            deleteBtn
                            text={'Delete the task'}
                            onPress={onPressDeleteHandler}
                        />
                    )}
                </ButtonsWrapper>
            </ScrollView>
        </ContainerWrapper>
    )
}
