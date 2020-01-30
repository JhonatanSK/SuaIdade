import React from 'react';
import { StyleSheet } from 'react-native'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

function Main({ navigation }) {
    let nome = "Jhonatan";

    return (
        <View style={Styles.container}>
            <View style={Styles.divs}>
                <Text style={Styles.texto}>Digite seu nome:</Text>
                <TextInput style={Styles.txtInput}></TextInput>
            </View>
            <View style={Styles.divs}>
                <Text style={Styles.texto}>Digite sua data de nascimento:</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Result') }>
                    <Text>Clique aqui</Text>
                </TouchableOpacity>
            </View>           
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#E3F2FD'    
    },
    divs: {
        borderWidth: 5,
        borderColor: '#000',
        padding: 60,
        backgroundColor: '#BBDEFB'
    },
    texto: {
        fontSize:22
    },
    txtInput: {
        fontSize:14,
        borderWidth:5,
        borderColor: '#2196F3',
        marginTop:10,
        borderRadius:12
    }
})

export default Main;