import { useState }  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

export default function Acesso({navigation}) {

  const [email, setEmail ] = useState('');
  const [senha, setSenha ] = useState('');
  const [ signInWithEmailAndPassword, user, loading, error ] = 
  useSignInWithEmailAndPassword(auth); 

    // useEffect(()=> {
    //     onAuthStateChanged(auth, function(user){
    //         setUser(user);
    //         if(initializing) setInitializing(false);
    //     })
    // }, [])

    function handleSignIn(){
      signInWithEmailAndPassword(email, senha);
    
      if(loading){
        return <View style={styles.loading}>
          <Text style={styles.txLoading}>Carregando...</Text>
        </View>
      }

      if(user) {
          return navigation.navigate('Home');
      }

      if(error){
        return <Text>Os dados estão incorretos. Tente novamente</Text>
      }
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}> Agenda de Contatos </Text>

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
              handleSignIn();
        }}>
                <Text  style={styles.txBot}>Logar</Text>
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

