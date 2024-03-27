import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Firebase from '../firebase';

export default function AlterarMusica({navigation, route}){
    const id = route.params.id;

    const [ banda, setBanda ] = useState(route.params.banda);
    const [ genero, setGenero ] = useState(route.params.genero);
    const [ musica, setMusica ] = useState(route.params.musica);

    function AlterarMusica(id, banda, genero, musica){
        Firebase.collection("musica").doc(id).update({
            artistaBanda: banda,
            genero: genero,
            musica: musica,
        })
        Alert.alert("Aviso", "Musica alterada com sucesso")
        navigation.navigate("Home")
    }

    return(
        <View style={StyleSheet.container}>
            <View>
                <Text style={styles.TITULO}>
                    Alterar dados da musica
                </Text>
            </View>

            <View>
                <TextInput autoCapitalize='words' style={styles.input} placeholder='Digite a banda/artista' 
                onChangeText={setBanda} value={banda}/>

                <TextInput autoCapitalize='words' style={styles.input} placeholder='Digite a banda/artista' 
                onChangeText={setGenero} value={genero}/>

                <TextInput autoCapitalize='words' style={styles.input} placeholder='Digite a banda/artista' 
                onChangeText={setMusica} value={musica}/>

                <TouchableOpacity style={styles.btnEnviar} onPress={()=> {
                    alterarMusica(id, banda, genero, musica);
                }}>
                    <Text style={styles.btnTxEnviar}> Alterar </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}