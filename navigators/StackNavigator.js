import { createStackNavigator } from '@react-navigation/stack'

import TaskListScreen from '../screens/TaskListScreen'
import TaskFormScreen from '../screens/TaskFormScreen'

const Stack = createStackNavigator()

export default function StackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='TasksList' component={TaskListScreen} />
            <Stack.Screen name='Form' component={TaskFormScreen} />
        </Stack.Navigator>
    )
}
