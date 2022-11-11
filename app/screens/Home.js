import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

export default function Home() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Image style={styles.center} source={require('./../assets/servico.png')} /> 
      <TouchableOpacity onPress={() => navigation.navigate('Tabs')} style={styles.alinharFundo}>
        <Text style={styles.botao}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#232323',
    padding: 8,
    position: 'relative',
  },
  alinharFundo: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  botao: {
    alignSelf: 'center',
    width: 250,
    backgroundColor: '#53FF50',
    textAlign: 'center',
    padding: 25,
    fontSize: 24,
    fontWeight: '700',
    borderRadius: 10,
    position: 'absolute',
    bottom: 1,
    marginBottom: 45,
  },
  center: {
    alignSelf: 'center',
  }
});
