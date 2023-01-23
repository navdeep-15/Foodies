import React, { memo } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import screenNames from '@navdeep/utils/screenNames'
import { navigationRef } from '@navdeep/utils/navigationService'
import HomeScreen from '@navdeep/screens/HomeScreen'
import DetailScreen from '@navdeep/screens/DetailScreen'
import SplashScreen from '@navdeep/screens/SplashScreen'

const Stack = createNativeStackNavigator()

export const RootNavigator = memo((linking: any) => {
    return (
        <NavigationContainer linking={linking} ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={screenNames?.SPLASH_SCREEN} component={SplashScreen} />
                <Stack.Screen name={screenNames?.HOME_SCREEN} component={HomeScreen} />
                <Stack.Screen name={screenNames?.DETAIL_SCREEN} component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
})