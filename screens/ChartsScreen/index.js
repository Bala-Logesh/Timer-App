import { useState } from 'react'
import { Text, FlatList } from 'react-native'
import Chart from '../../components/Chart'
import { ContainerWrapper, ButtonsWrapper } from '../../globals/wrappers'
import CustomButton from '../../components/CustomButton'
import { GlobalStyles } from '../../globals/GlobalStyles'
import { createArray, keyExtractor } from '../../globals/utilities'

export default function Charts() {
    const [selectedYear, setSelectedYear] = useState(2020)

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
                title={'All Tasks'}
                chartName={'No. of Tasks vs Month'}
                data={createArray(13, 1)}
            />
            <Chart
                title={'Completed'}
                chartName={'No. of Completed Tasks vs Month'}
                data={createArray(13, 1)}
            />
        </ContainerWrapper>
    )
}
