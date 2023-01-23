import { SafeAreaView, SectionList, StyleSheet, Text, View, Image, TouchableOpacity, Alert, BackHandler } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import constant from '@navdeep/utils/constant'
import { vh, vw } from '@navdeep/utils/dimensions'
import localImages from '@navdeep/utils/localImages'
import screenNames from '@navdeep/utils/screenNames'
import RNExitApp from 'react-native-exit-app'

interface Props {
    navigation: any,
    route: any
}

export default function HomeScreen(props: Props) {

    useEffect(() => {
        const backAction = () => {
            Alert.alert('Hold On', 'Are you sure you want to exit', [
                { text: "No", onPress: () => null, style: "cancel" },
                { text: 'Yes', onPress: () => RNExitApp.exitApp() }
            ]);
            return true;
        };
        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => backHandler.remove();
    }, []);

    const onPressItem = (item: any) => {
        props?.navigation?.navigate(screenNames?.DETAIL_SCREEN, { item })
    }

    const keyExtractor = useCallback((item, index) => index?.toString(), [])

    const renderItem = useCallback(({ item }: any) => {
        return (
            <TouchableOpacity onPress={() => onPressItem(item)} style={styles.itemContainer} activeOpacity={0.6}>
                <View style={styles.leftContainer}>
                    <Image source={localImages.VEG} style={styles.vegImage} />
                    <Text style={styles.itemName}>{item?.name ?? ''}</Text>
                    <Text style={styles.price}>{item?.price ?? ''}</Text>
                </View>
                <Image source={{ uri: item?.image }} style={styles.img} resizeMode='contain' />
            </TouchableOpacity>
        )
    }, [])

    const renderSectionHeader = useCallback(({ section: { title } }) => {
        return (
            <View style={styles.headerView}>
                <Text style={styles.header}>{title}</Text>
            </View>
        )
    }, [])

    const itemSeparatorComponent = useCallback(() => {
        return <View style={styles.seperator} />
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Menu</Text>
            <SectionList
                sections={constant.MENU_DATA}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                SectionSeparatorComponent={itemSeparatorComponent}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: vw(10)
    },
    headerView: {
        borderLeftWidth: vw(4),
        borderColor: 'red',
        paddingLeft: vw(10),
    },
    heading: {
        fontSize: vw(32),
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        textAlign: 'center',
        marginBottom: vh(20)
    },
    header: {
        fontSize: vw(24),
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    seperator: {
        marginTop: vh(14)
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: vh(12)
    },
    leftContainer: {
        flex: 0.5
    },
    vegImage: {
        width: vw(20),
        height: vw(20)
    },
    itemName: {
        fontSize: vw(16),
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginVertical: vh(8)
    },
    price: {
        fontSize: vw(14),
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    img: {
        flex: 0.5,
        width: vw(80),
        height: vh(140),
        borderRadius: vw(10)
    },
})