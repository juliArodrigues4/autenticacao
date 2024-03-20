import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>
          Contatos
        </Text>
      </View>

      <FlatList
        data={arrayPeople}
        renderItem={({item}) =>
        <View style={styles.containerFlat}>
          <View style={styles.cont}>
            <Image source={item.image} style={styles.img} resizeMode="contain"/>
            <Image source={item.image2} style={styles.img2} resizeMode="contain"/>
            <Text style={styles.nomes}>
              {item.nome} 
            </Text>
          </View>
        </View>
        }
      />

    </View>
  );
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

const arrayPeople = [
  {
    nome: "Laura Romanoff",
    image: require('../assets/contato (1).png'),
    image2: require('../assets/envelope.png'),
  },
  {
    nome: "Celso Russomano",
    image: require('../assets/contato (1).png'),
    image2: require('../assets/envelope.png'),
  },
  {
    nome: "Mariazinha",
    image: require('../assets/contato (1).png'),
    image2: require('../assets/envelope.png'),
  },
  {
    nome: "Lana dos Reis",
    image: require('../assets/contato (1).png'),
    image2: require('../assets/envelope.png'),
  },
  {
    nome: "Melania Martinha",
    image: require('../assets/contato (1).png'),
    image2: require('../assets/envelope.png'),
  },
  {
    nome: "Cleitinho Soares",
    image: require('../assets/contato (1).png'),
    image2: require('../assets/envelope.png'),
  }, 
  {
    nome: "Dona Carmela",
    image: require('../assets/contato (1).png'),
    image2: require('../assets/envelope.png'),
  },
   {
    nome: "Marcos Tinder",
    image: require('../assets/contato (1).png'),
    image2: require('../assets/envelope.png'),
  }, 
  {
    nome: "Nick Nelson",
    image: require('../assets/contato (1).png'),
    image2: require('../assets/envelope.png'),
  }, 
];