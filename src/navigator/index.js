import React, { PureComponent } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AdminScreen from '../screens/AdminScreen'

const StackMain = createStackNavigator()

class Navigator extends PureComponent {
    render() {
        return(
            <NavigationContainer>
                <StackMain.Navigator
                    initialRouteName={'AdminScreen'}
                    screenOptions={{ 
                        headerShown: false,
                        animationEnabled: true }} >
                    <StackMain.Screen
                        name="AdminScreen"
                        component={AdminScreen} />
                </StackMain.Navigator>
            </NavigationContainer>
        )
    }
}

export default Navigator