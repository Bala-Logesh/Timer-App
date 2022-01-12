import React from 'react'
import { View, Text } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { GlobalStyles } from '../../globals/GlobalStyles'
import { months } from '../../globals/utilities'
import { CardWrapper } from '../../globals/wrappers'
import { ChartLine } from './components'
import styles from './styles'

export default function Chart({ title, chartName, data }) {
    let max = Math.max(...data)

    return (
        <>
            <Text
                style={[
                    GlobalStyles.subTitle2,
                    {
                        marginVertical: moderateScale(10),
                    },
                ]}
            >
                {title}
            </Text>
            <CardWrapper flex={1}>
                <Text
                    style={[
                        GlobalStyles.secondaryText,
                        {
                            marginBottom: moderateScale(10),
                        },
                    ]}
                >
                    {chartName}
                </Text>
                <View style={styles.chartLines}>
                    <View style={styles.chartLinesContainer}>
                        {data.map((d, index) => (
                            <ChartLine
                                key={index}
                                value={d}
                                index={index}
                                max={max}
                            />
                        ))}
                    </View>
                </View>
                <View style={styles.xaxis}>
                    {months.map((month, index) => (
                        <Text key={index} style={styles.legendText}>
                            {month}
                        </Text>
                    ))}
                </View>
            </CardWrapper>
        </>
    )
}
