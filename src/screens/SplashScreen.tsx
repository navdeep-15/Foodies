import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { vh, vw } from '@navdeep/utils/dimensions';
import screenNames from '@navdeep/utils/screenNames';
import AnimatedLottieView from 'lottie-react-native'
import localImages from '@navdeep/utils/localImages';

interface Props {
    navigation: any,
    route: any
}

export default function SplashScreen(props:Props) {
    useEffect(() => {
      setTimeout(() => {
          props?.navigation?.navigate(screenNames?.HOME_SCREEN)
      }, 2000);
    }, [])
    
    // const handleDynamicLink = async () => {
    //     const link = await dynamicLinks().getInitialLink()            // FOR BACKGROUND STATE
    //     if (link?.url) {
    //         console.log('DYNAMIC LINK (BACKGROUND): ', link);
    //         let obj = onFetchDynamicLink(link)
    //         dispatch({
    //             type: actionNames?.DYNAMIC_LINK_REDUCER,
    //             payload: {
    //                 screenName: obj?.screen ?? '',
    //                 navigatorName: obj?.navigator ?? ''
    //             }
    //         })
    //     }
    //     else {
    //         dynamicLinks().onLink((link: any) => {                    // FOR FOREGROUND STATE
    //             console.log('DYNAMIC LINK (FOREGROUND): ', link);
    //             let obj = onFetchDynamicLink(link)
    //             dispatch({
    //                 type: actionNames?.DYNAMIC_LINK_REDUCER,
    //                 payload: {
    //                     screenName: obj?.screen ?? '',
    //                     navigatorName: obj?.navigator ?? ''
    //                 }
    //             })
    //         })
    //     }
    // }

    // const onFetchDynamicLink = (link: any) => {
    //     if (link?.url) {
    //         let screen = '', navigator = ''
    //         let temp = link?.url?.split('?')?.[1]?.split('&')
    //         let temp_screen = temp?.[0]?.split('=')?.[1]
    //         let temp_navigator = temp?.[1]?.split('=')?.[1]

    //         switch (temp_screen) {
    //             case 'mapsScreen': screen = screenNames.MAPS_SCREEN
    //                 break;
    //             default: screen = ''
    //                 break;
    //         }
    //         switch (temp_navigator) {
    //             case 'premiumNavigator': navigator = screenNames?.PREMIUM_NAVIGATOR
    //                 break;
    //             default: navigator = ''
    //                 break;
    //         }
    //         return { screen, navigator }
    //     }
    //     return {}
    // }

    return (
        <SafeAreaView style={styles.container}>
            <AnimatedLottieView resizeMode='contain' source={localImages.VEGIES_LOTTIE} style={styles.lottie} autoPlay loop />
            <AnimatedLottieView resizeMode='contain' source={localImages.FOODIES_LOTTIE} style={styles.lottie} autoPlay loop />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent:'center'
    },
    lottie: {
        width: '100%',
        height: vh(200),
        alignSelf: 'center'
    }
})