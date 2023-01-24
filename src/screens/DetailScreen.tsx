import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { vh, vw } from '@navdeep/utils/dimensions'
import localImages from '@navdeep/utils/localImages'
import { Header } from '@navdeep/components/Header'
import dynamicLinks from '@react-native-firebase/dynamic-links';
import screenNames from '@navdeep/utils/screenNames'
import constant from '@navdeep/utils/constant'
import { useSelector } from 'react-redux'

interface Props {
    navigation: any,
    route: any
}

export default function DetailScreen(props: Props) {
    const { sectionIndex, itemIndex } = props?.route?.params ?? useSelector((state: any) => state?.dynamicLinkReducer)

    const onPressShareLink = () => {
        dynamicLinks().buildShortLink({
            link: `https://navdeep.com/link?screen=${screenNames?.DETAIL_SCREEN}&sectionIndex=${sectionIndex}&itemIndex=${itemIndex}`,
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
        }).catch((e: any) => {
            console.log('error while generating link : ', e)
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Details'} navigation={props?.navigation} />
            <Image source={constant?.MENU_DATA?.[sectionIndex]?.data?.[itemIndex]?.image} style={styles.img} resizeMode='contain' />
            <Image source={localImages.VEG} style={styles.vegImage} />
            <Text style={styles.itemName}>{constant?.MENU_DATA?.[sectionIndex]?.data?.[itemIndex]?.name ?? ''}</Text>
            <Text style={styles.price}>{constant?.MENU_DATA?.[sectionIndex]?.data?.[itemIndex]?.price ?? ''}</Text>
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