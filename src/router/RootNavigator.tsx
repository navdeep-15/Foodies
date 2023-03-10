import React, { memo } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import screenNames from '@navdeep/utils/screenNames'
import { navigationRef } from '@navdeep/utils/navigationService'
import SplashScreen from '@navdeep/screens/SplashScreen'
import { HomeNavigator } from './HomeNavigator'

const Stack = createNativeStackNavigator()

export const RootNavigator = memo((linking: any) => {
    return (
        <NavigationContainer linking={linking} ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={screenNames?.SPLASH_SCREEN} component={SplashScreen} />
                <Stack.Screen name={screenNames?.HOME_NAVIGATOR} component={HomeNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
})