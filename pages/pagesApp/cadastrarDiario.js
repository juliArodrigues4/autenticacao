import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Firebase from '../firebase';

export default function CadastrarMusica({navigation}){

    const [ musica, setMusica ] = useState(null)
    const [ genero, setGenero ] = useState(null)
    const [ banda, setBanda ] = useState(null)

    function addMusica() {
        Firebase.collection('musica').add({
            artistaBanda: banda,
            genero: genero,
            musica: musica,
        });
        setBanda({banda: ''})
        setGenero({genero: ''})
        setMusica({musica: ''})
        Alert.alert("Cadastron", "Musica cadastrada com sucesso")
        navigation.navigate("Home")
    }

    return(
        <View style={styles.container}>
            <View>
                <Text>
                    Cadastre suas músicas
                </Text>

                <TextInput autoCapitalize='words' style={styles.input} placeholder='Digite a banda/artista' 
                onChangeText={setBanda} value={banda}/>

                <TextInput autoCapitalize='words' style={styles.input} placeholder='Digite a banda/artista' 
                onChangeText={setGenero} value={genero}/>

                <TextInput autoCapitalize='words' style={styles.input} placeholder='Digite a banda/artista' 
                onChangeText={setMusica} value={musica}/>

                <TouchableOpacity style={styles.btnEnviar} onPress={()=> {
                    addMusica();
                }}>
                    <Text style={styles.btnTxEnviar}> Enviar </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}