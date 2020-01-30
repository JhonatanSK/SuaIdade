import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

function Result ({ navigation }) {
    let nome = "Jhonatan"
    let dia = 500;
    let mes = 50;
    let ano = 19;

    return (
        <>
            <View style={Styles.container}>
                <View style={Styles.info}>
                    <Text style={Styles.infoPadrao}>olá {nome}, segue abaixo as informações sobre sua idade atual em dia, mês e ano</Text>
                </View>
                <View style={Styles.divs}>
                    <Text style={Styles.texto}>Dia: {dia}</Text>
                    <Text style={Styles.texto}>Mes: {mes}</Text>
                    <Text style={Styles.texto}>Ano: {ano}</Text>
                </View>
                <View style={Styles.footer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Main') }>
                        <Text>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const Styles = StyleSheet.create({
    divs: {
        padding:20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    },
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#E3F2FD'
    },
    info: {
        padding: 20
    },
    infoPadrao: {
        fontSize:18,
        fontWeight: 'bold'
    },
    texto: {
        fontSize: 18
    },
    footer:{
        fontSize:12
    }
})

export default Result;