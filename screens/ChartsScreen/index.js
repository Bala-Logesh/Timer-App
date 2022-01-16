import { useContext, useState } from 'react'
import { Text, FlatList } from 'react-native'
import Chart from '../../components/Chart'
import { ContainerWrapper, ButtonsWrapper } from '../../globals/wrappers'
import CustomButton from '../../components/CustomButton'
import { GlobalStyles } from '../../globals/GlobalStyles'
import { createArray, keyExtractor } from '../../globals/utilities'
import { DataContext } from '../../context'

export default function Charts() {
    const [selectedYear, setSelectedYear] = useState(2021)

    const {
        task: { state },
    } = useContext(DataContext)

    let active = {}
    let completed = {}
    let activeArray = []
    let completedArray = []

    state.tasks.map(task => {
        let date = new Date(task.createdAt)
        let year = date.getFullYear()
        let month = date.getMonth() + 1

        if (!task.completed) {
            if (!active[year]) {
                active = { ...active, [year]: {} }
            }
            if (!active[year][month]) {
                active[year][month] = 0
            }
            if (active[year][month] >= 0) {
                active[year][month] = active[year][month] + 1
            }
        } else {
            if (!completed[year]) {
                completed = { ...completed, [year]: {} }
            }
            if (!completed[year][month]) {
                completed[year][month] = 0
            }
            if (completed[year][month] >= 0) {
                completed[year][month] = completed[year][month] + 1
            }
        }
    })

    for (let i = 1; i < 13; i++) {
        let yr = active[selectedYear]
        yr && activeArray.push(yr[i] === undefined ? 0 : yr[i])
    }
    for (let i = 1; i < 13; i++) {
        let yr = completed[selectedYear]
        yr && completedArray.push(yr[i] === undefined ? 0 : yr[i])
    }

    return (
        <ContainerWrapper>
            <Text style={GlobalStyles.title}>Tasks Summary</Text>
            <ButtonsWrapper>
                <FlatList
                    keyExtractor={keyExtractor}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={createArray(2031, 2020)}
                    renderItem={({ item }) => (
                        <CustomButton
                            text={item}
                            secondary={selectedYear === item ? false : true}
                            onPress={() => setSelectedYear(item)}
                        />
                    )}
                    bounces={false}
                />
            </ButtonsWrapper>
            <Chart
                title={`All Tasks - ${selectedYear}`}
                chartName={'No. of Tasks vs Month'}
                data={activeArray}
            />
            <Chart
                title={`Completed - ${selectedYear}`}
                chartName={'No. of Completed Tasks vs Month'}
                data={completedArray}
            />
        </ContainerWrapper>
    )
}
