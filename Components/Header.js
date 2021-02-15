import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default function Header(props) {

    return (
        <View style={styles.header}>
            <Image source={require('../Assets/LabelCastA_TEXT_Whyte_site1-oz9oe3y2b08nt7o30r3axoyvi5ggt9dd81s7to9cni.png')}/>
        </View>
    );
};


const styles= StyleSheet.create({
    header: {
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor: '#6cc9dd',
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:10
    },
});


