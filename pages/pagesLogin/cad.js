import { useState }  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

export default function Cad({navigation}) {
    
        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');
        const [ createUserWithEmailAndPassword,
          user, loading, error, ] = 
        useCreateUserWithEmailAndPassword(auth);

    function handleSignIn(){
        createUserWithEmailAndPassword(email, senha);
    
      if(loading){
        return <View style={styles.loading}>
          <Text style={styles.txLoading}>Carregando...</Text>
        </View>
      }

      if(user) {
          return navigation.navigate('Acesso');
      }

      if(error){
        return <Text>Os dados não foram inseridos no banco. Tente novamente</Text>
      }
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}> Cadastre-se </Text>

        <TextInput style={styles.txInput}
            placeholder="Digite o email"
            onChangeText={(email)=>setEmail(email)}
            value={email}
        />

        <TextInput style={styles.txInput}
            placeholder="Crie uma senha"
            secureTextEntry
            onChangeText={(senha)=>setSenha(senha)}
            value={senha}
        />

        <TouchableOpacity style={styles.botao}
            onPress={()=>{
              handleSignIn();
        }}>
                <Text  style={styles.txBot}>Criar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECC07A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txInput: {
    width: 300,
    backgroundColor: '#E23582',
    color: 'rgb(251, 251 254)',
    fontSize: 20,
    marginTop: 20,
    borderRadius: 30,
    padding: 15,
    height: 60
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#220511'
  },
  botao:{
    width: 300,
    backgroundColor: '#DD8CB0',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 20,
    borderRadius: 60,
    
  },
  txBot: {
    fontWeight: 'bold',
    color: '#220511',
    fontSize: 18
  },

});

