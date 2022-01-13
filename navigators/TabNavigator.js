import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { moderateScale } from 'react-native-size-matters'
import { MaterialIcons } from '@expo/vector-icons'

import StackNavigator from './StackNavigator'
import TimerScreen from '../screens/TimerScreen'
import ChartsScreen from '../screens/ChartsScreen'
import PersonalInfoScreen from '../screens/PersonalInfoScreen'
import { colors, GlobalStyles } from '../globals/GlobalStyles'
import { Platform } from 'react-native'

const Tab = createBottomTabNavigator()

export default function MainNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.lightBg,
                    borderTopColor: colors.lightBg,
                    height: Platform.isPad ? 100 : moderateScale(50),
                },
                tabBarIcon: ({ _, color, size }) => {
                    let iconName

                    switch (route.name) {
                        case 'Timer':
                            iconName = 'timer'
                            break
                        case 'List':
                            iconName = 'format-list-bulleted'
                            break
                        case 'Charts':
                            iconName = 'pie-chart-outlined'
                            break
                        case 'Profile':
                            iconName = 'person-outline'
                            break
                        default:
                            iconName = null
                            break
                    }

                    return (
                        <MaterialIcons
                            name={iconName}
                            color={color}
                            size={moderateScale(size)}
                            style={GlobalStyles.tabIcon}
                        />
                    )
                },
                tabBarActiveTintColor: colors.lightBlue,
                tabBarInactiveTintColor: colors.gray,
            })}
        >
            <Tab.Screen name='Timer' component={TimerScreen} />
            <Tab.Screen name='List' component={StackNavigator} />
            <Tab.Screen name='Charts' component={ChartsScreen} />
            <Tab.Screen name='Profile' component={PersonalInfoScreen} />
        </Tab.Navigator>
    )
}
