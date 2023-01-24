import React, { memo } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import screenNames from '@navdeep/utils/screenNames'
import HomeScreen from '@navdeep/screens/HomeScreen'
import DetailScreen from '@navdeep/screens/DetailScreen'
import { useSelector } from 'react-redux'

const Stack = createNativeStackNavigator()

export const HomeNavigator = memo(() => {
    const { screenName, sectionIndex, itemIndex } = useSelector((state: any) => state?.dynamicLinkReducer)
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={screenName ?? screenNames?.HOME_SCREEN}>
            <Stack.Screen name={screenNames?.HOME_SCREEN} component={HomeScreen} />
            <Stack.Screen name={screenNames?.DETAIL_SCREEN} component={DetailScreen} />
        </Stack.Navigator>
    )
})