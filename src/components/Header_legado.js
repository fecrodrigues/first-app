import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => (
    <View style={style.container}>
        <Text style={style.title}>{props.title}</Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        marginTop: 24,
        backgroundColor: '#3f7bdb',
        padding: 10,
    
        //FLEXBOX
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 20,
        color: '#fff'
    }
});

export default Header;