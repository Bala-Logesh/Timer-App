import { NavigationContainer } from '@react-navigation/native'

import MainNavigator from './navigators/TabNavigator'
import { GlobalStyles, colors } from './globals/GlobalStyles'
import { StatusBar } from 'react-native'
import ContextProviderWrapper from './context'

export default function App() {
    return (
        <ContextProviderWrapper>
            <NavigationContainer style={GlobalStyles.navigationContainer}>
                <MainNavigator />
                <StatusBar
                    translucent
                    backgroundColor={colors.darkBg}
                    barStyle='light-content'
                />
            </NavigationContainer>
        </ContextProviderWrapper>
    )
}
