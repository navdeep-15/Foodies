import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { memo } from 'react'
import localImages from '@navdeep/utils/localImages'
import { vh, vw } from '@navdeep/utils/dimensions'

interface Props {
    title: string,
    navigation: any,
}

export const Header = memo((props: Props) => {

    const goBack = () => {
        props?.navigation?.goBack()
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack} hitSlop={styles.hitSlop}>
                <Image source={localImages?.BACK} style={styles.backImg} />
            </TouchableOpacity>
            <Text style={styles.screenHeading}>{props?.title ?? ''}</Text>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: vh(20)
    },
    screenHeading: {
        fontSize: vw(20),
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        width: vw(300),
        textTransform: 'capitalize',
    },
    backImg: {
        width: vw(25),
        height: vw(25),
        marginLeft: vw(5),
        tintColor: 'black',
    },
    hitSlop: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10
    },
})