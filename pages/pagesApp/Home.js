import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import Firebase from "../firebase";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Home({navigation}) {
  const [ diario, setDiario ] = useState([]);

  function deleteDiario(id){
    Firebase.collection("diario").doc(id).delete();

    Alert.alert("O diário foi deletado.");
  }

  useEffect(()=>{
    Firebase.collection("diario").onSnapshot((query)=>{
      const lista = [];
      query.forEach((doc) => {
        lista.push({...doc.data(), id: doc.id});
      });
      setDiario(lista);
    });
  }, []);

    <FlatList
    data={diario}
    renderItem={({item})=>{
      return(
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("alterarDiario", {
            id: item.id,
            banda: item.artistaBanda,
            genero: item.genero,
            musica: item.musica
          })}>

            <View>
              <Text> Artista/Banda: 
                <Text>{item.artistaBanda}</Text> 
              </Text>

              <Text> Gênero: 
                <Text> {item.genero} </Text>
              </Text>

              <Text> Musica: 
                <Text> {item.musica} </Text>
              </Text>

            </View>
          </TouchableOpacity>

          <View>
            <TouchableOpacity onPress={() => {deleteMusica(item.id)}}>
                <MaterialCommunityIcons name="delete-empty" size={70} color="red" />
            </TouchableOpacity>
          </View>
        </View>

      );

      <TouchableOpacity onPress={() => navigation.navigate("cadastroMusica")}>
          <MaterialCommunityIcons name="plus-circle-otline" size={70} color="green" />
      </TouchableOpacity>

    }}/>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(251, 251, 220)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTitle:{
    width: 380,
    height: 80,
    padding: 15,
    marginBottom: 10,
    marginTop: 40
  },
  title:{
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  containerFlat:{
    width: 380,
    height: 'auto',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  cont:{
    width: 380,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgb(251, 251, 240)',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  
  },
  nomes:{
    fontSize: 18,
    color: 'rgb(04, 03, 16)',
    textAlign: 'left',
  },
  img: {
    width: 30,
    height: 30,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  img2: {
    width: 30,
    height: 30,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  }

});
