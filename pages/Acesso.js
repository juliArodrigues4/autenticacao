import { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import  Firebase  from '../firebase';
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from "@firebase/app";

export default function Acesso({navigation}) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [user, setUser] = useState('');
    const app = initializeApp(Firebase);
    const auth = getAuth(app);

    function login(){
        signInWithEmailAndPassword(auth, email, senha).catch(
            function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorCode, errorMessage);
            }
        )
    }

    useEffect(()=> {
        onAuthStateChanged(auth, function(user){
            setUser(user);
            if(initializing) setInitializing(false);
        })
    }, [])

    if(user) {
        return navigation.navigate('Home');
    }


  return (
    <View style={styles.container}>
        <Text style={styles.title}> Acesso ao {'\n'} meu diário s2 </Text>

        <TextInput style={styles.txInput}
            placeholder="Digite o email"
            onChangeText={(email)=>setEmail(email)}
            value={email}
        />

        <TextInput style={styles.txInput}
            placeholder="Digite a senha"
            onChangeText={(senha)=>setSenha(senha)}
            value={senha}
        />

        <TouchableOpacity style={styles.botao}
            onPress={()=>{
                login();
        }}>
                <Text  style={styles.txBot}>Logar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txInput: {
    width: 300,
    backgroundColor: '#0000CD',
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    borderRadius: 10,
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  botao:{
    width: 300,
    backgroundColor: '#FF0000',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 20,
    borderRadius: 50,
    
  },
  txBot: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18
  },

});

