import React from 'react';
import { StyleSheet } from 'react-native'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

function Main({ navigation }) {
    // let nome = "Jhonatan";

    return (
        <View style={Styles.container}>
            <View style={Styles.divs}>
                <Text style={Styles.texto}>Digite seu nome:</Text>
                <TextInput style={Styles.txtInput}></TextInput>

                <Text style={Styles.texto}>Digite sua data de nascimento:</Text>
                <TextInput style={Styles.txtInput} ></TextInput>
                <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate('Result') }>
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
        backgroundColor: '#72ff80',
        padding:80
    },
    divs: {
        borderWidth: 5,
        borderColor: '#f6f3f3',
        borderRadius: 8,
        width: 300,
        height: 550,
        padding: 30,
        backgroundColor: '#fff'
    },
    texto: {
        fontSize:20,
        color: '#827f7f'
    },
    txtInput: {
        fontSize:14,
        borderWidth:3,
        borderColor: '#e3ffe6',
        marginTop:22,
        borderRadius:9,
        marginBottom: 30,
        backgroundColor: '#f6f6f6',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#4cff5e',
        alignItems: 'center',
        justifyContent: 'center',
        height:40,
        borderRadius: 10,
        marginTop: 150
    },
})

export default Main;