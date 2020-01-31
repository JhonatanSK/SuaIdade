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
                <View style={Styles.informacoes}>
                    <View style={Styles.info}>
                        <Text style={Styles.infoPadrao}>olá {nome}, segue abaixo as informações sobre sua idade atual em dia, mês e ano</Text>
                    </View>
                    <View style={Styles.divs}>
                        <Text style={Styles.texto}>Dia:   {dia}</Text>
                        <Text style={Styles.texto}>Mes:   {mes}</Text>
                        <Text style={Styles.texto}>Ano:   {ano}</Text>
                    </View>
                    <View style={Styles.footer}>
                        <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate('Main') }>
                            <Text>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        padding:40
    },    
    divs: {
        padding:20,
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 40,
        marginLeft:65

    },

    info: {
        padding: 20
    },
    infoPadrao: {
        fontSize:22,
        color: '#827f7f'
    },
    texto: {
        fontSize: 24,
        marginBottom: 15
    },
    informacoes: {
        height: 600
    },
    footer:{
        fontSize:12,
        padding: 30
    },
    button: {
        backgroundColor: '#4cff5e',
        alignItems: 'center',
        justifyContent: 'center',
        height:40,
        borderRadius: 10,
        marginTop: 80
    },
})

export default Result;