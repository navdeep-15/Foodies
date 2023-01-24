import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { vh, vw } from '@navdeep/utils/dimensions';
import screenNames from '@navdeep/utils/screenNames';
import AnimatedLottieView from 'lottie-react-native'
import localImages from '@navdeep/utils/localImages';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import { useDispatch } from 'react-redux';
import actionNames from '@navdeep/utils/actionNames';
import { updateDynamicLinkReducer } from '@navdeep/actions';

interface Props {
    navigation: any,
    route: any
}

export default function SplashScreen(props: Props) {

    const dispatch = useDispatch()

    useEffect(() => {
        handleDynamicLink()
        // setTimeout(() => {
        //     props?.navigation?.navigate(screenNames?.HOME_SCREEN)
        // }, 2000);
        props?.navigation?.navigate(screenNames?.HOME_SCREEN)
    }, [])

    const handleDynamicLink = async () => {
        const link = await dynamicLinks().getInitialLink()            // FOR BACKGROUND STATE
        if (link?.url) {
            console.log('DYNAMIC LINK (BACKGROUND): ', link);
            dispatch(updateDynamicLinkReducer(link))
        }
        else {
            dynamicLinks().onLink((link: any) => {                    // FOR FOREGROUND STATE
                console.log('DYNAMIC LINK (FOREGROUND): ', link);
                dispatch(updateDynamicLinkReducer(link))
            })
        }
    }

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
        justifyContent: 'center'
    },
    lottie: {
        width: '100%',
        height: vh(200),
        alignSelf: 'center'
    }
})