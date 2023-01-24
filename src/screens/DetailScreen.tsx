import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Alert, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import { vh, vw } from '@navdeep/utils/dimensions'
import localImages from '@navdeep/utils/localImages'
import { Header } from '@navdeep/components/Header'
import dynamicLinks from '@react-native-firebase/dynamic-links';
import screenNames from '@navdeep/utils/screenNames'
import constant from '@navdeep/utils/constant'
import { useSelector } from 'react-redux'
import Share from 'react-native-share';
import RNExitApp from 'react-native-exit-app'
import { useIsFocused } from '@react-navigation/native'

interface Props {
    navigation: any,
    route: any
}

export default function DetailScreen(props: Props) {
    const isFocused = useIsFocused()

    const { sectionIndex, itemIndex, screenName } = useSelector((state: any) => state?.dynamicLinkReducer)

    const [itemDetailObject, setitemDetailObject] = useState({
        sectionIndex: props?.route?.params?.sectionIndex,
        itemIndex: props?.route?.params?.itemIndex
    })

    useEffect(() => {
        if (isFocused && screenName?.length) {
            setitemDetailObject({
                sectionIndex: sectionIndex,
                itemIndex: itemIndex
            })
        }
    }, [isFocused, screenName])

    useEffect(() => {
        const backAction = () => {
            if (screenName?.length) {
                Alert.alert('Hold On', 'Are you sure you want to exit', [
                    { text: "No", onPress: () => null, style: "cancel" },
                    { text: 'Yes', onPress: () => RNExitApp.exitApp() }
                ]);
            }
            else
                props?.navigation?.goBack()
            return true;
        };
        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => backHandler.remove();
    }, [screenName]);

    const onPressShareLink = () => {
        dynamicLinks().buildShortLink({
            link: `https://navdeep.com/link?screen=${screenNames?.DETAIL_SCREEN}&sectionIndex=${itemDetailObject?.sectionIndex}&itemIndex=${itemDetailObject?.itemIndex}`,
            domainUriPrefix: 'https://foodlist.page.link',
            android: {
                packageName: 'com.foodlist',
                fallbackUrl: 'https://play.google.com/',
            },
            navigation: {
                forcedRedirectEnabled: true,
            }
        }).then((res) => {
            console.log('response of generated link : ', res)
            let options = {
                title: 'Share Foodies link via',
                message: `Click on the below Foodies link \n ${res}`,
                subject: 'Share your food details from Foodies',
                forceDialog: true,
            };
            Share.open(options);
        }).catch((e: any) => {
            console.log('error while generating link : ', e)
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Details'} navigation={props?.navigation} />
            <Image source={constant?.MENU_DATA?.[itemDetailObject?.sectionIndex]?.data?.[itemDetailObject?.itemIndex]?.image} style={styles.img} resizeMode='contain' />
            <Image source={localImages.VEG} style={styles.vegImage} />
            <Text style={styles.itemName}>{constant?.MENU_DATA?.[itemDetailObject?.sectionIndex]?.data?.[itemDetailObject?.itemIndex]?.name ?? ''}</Text>
            <Text style={styles.price}>{constant?.MENU_DATA?.[itemDetailObject?.sectionIndex]?.data?.[itemDetailObject?.itemIndex]?.price ?? ''}</Text>
            <TouchableOpacity onPress={onPressShareLink} style={styles.shareBtn} activeOpacity={0.6}>
                <Text style={styles.shareText}>Share Link</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: vw(10)
    },
    img: {
        width: '100%',
        height: vh(250),
        borderRadius: vw(10),
        marginTop: vh(20)
    },
    itemName: {
        fontSize: vw(32),
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginVertical: vh(8)
    },
    price: {
        fontSize: vw(26),
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    vegImage: {
        width: vw(30),
        height: vw(30),
        position: 'absolute',
        right: vw(15),
        top: vh(290)
    },
    shareBtn: {
        backgroundColor: 'red',
        width: vw(150),
        paddingVertical: vh(10),
        borderRadius: vw(10),
        alignSelf: 'center',
        position: 'absolute',
        bottom: vh(40)
    },
    shareText: {
        textAlign: 'center',
        fontSize: vw(18),
        color: 'white',
        fontWeight: 'bold',
    }
})