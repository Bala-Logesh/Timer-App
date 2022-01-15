import { useState } from 'react'
import { Pressable, Text, ScrollView } from 'react-native'
import {
    ContainerWrapper,
    CardWrapper,
    ButtonsWrapper,
    TitleWrapper,
} from '../../globals/wrappers'
import CustomButton from '../../components/CustomButton'
import { MaterialIcons } from '@expo/vector-icons'
import { fontSize, colors, GlobalStyles } from '../../globals/GlobalStyles'
import CustomInput from '../../components/CustomInput'
import styles from './styles'
import { PriorityButton, IntervalScroller } from './components'
import { priorities, intervals } from './extras'

export default function TaskForm({ navigation }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        priority: 'Low',
        taskInterval: 0,
        workIntervalHH: 0,
        workIntervalMM: 0,
        break: 0,
    })

    const onPressHandler = () => {
        console.log(formData);
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
                    <CustomButton text={'Save the task'} onPress={onPressHandler} />
                </ButtonsWrapper>
            </ScrollView>
        </ContainerWrapper>
    )
}
