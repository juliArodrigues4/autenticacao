import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Meu Diário</Text>
      <Text>Data: 11/03/2024</Text>
      <Text>Palavra: Gripe</Text>
      <Text>Hoje é um lindo dia que se inicia com muita gripe..... eu amo gripar..... gripo o dia todo sem parar</Text>
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
});