import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Constants from 'expo-constants';

import { Cadastrar, Registrar } from '../components/CadastrarEntrega'

export default function CadastroOrigem() {
  const navigation = useNavigation()
  const route = useRoute();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.header}>
            <Image style={styles.icon} source={require('./../assets/drone_icon.png')} />
            <Image style={styles.icon} source={require('./../assets/nome_servico.png')} />
          </View>
          <TouchableOpacity style={styles.back}  onPress={() => navigation.goBack()}>
              <Image source={require('./../assets/Arrow.png')} />
            </TouchableOpacity>

          <View style={styles.body}>
            <Text style={styles.texto_body}>Cep</Text>
            <View style={styles.input_container}>
              <TextInput onChangeText={text => Registrar(text, 'cep', route.name)} style={styles.input} keyboardType="numeric" />
            </View>

            <Text style={styles.texto_body}>Rua</Text>
            <View style={styles.input_container}>
              <TextInput onChangeText={text => Registrar(text, 'rua', route.name)} style={styles.input} />
            </View>

            <Text style={styles.texto_body}>Número</Text>
            <View style={styles.input_container}>
              <TextInput onChangeText={text => Registrar(text, 'numero', route.name)} style={styles.input} />
            </View>

            <Text style={styles.texto_body}>Cidade</Text>
            <View style={styles.input_container}>
              <TextInput onChangeText={text => Registrar(text, 'cidade', route.name)} style={styles.input} />
            </View>

            <Text style={styles.texto_body}>Estado</Text>
            <View style={styles.input_container}>
              <TextInput onChangeText={text => Registrar(text, 'estado', route.name)} style={styles.input} />
            </View>

            <TouchableOpacity onPress={() => Cadastrar(navigation, route)} style={styles.botao}>
              <Text style={styles.botao_text}>Registrar endereço</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1E1E1E',
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#232323',
    padding: 10,
  },
  icon: {
    marginVertical: 'auto',
    marginRight: 7,
  },
  body: {
    marginHorizontal: 40,
    position: 'relative',
    marginTop: 10,
  },
  texto_body: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
  },
  input: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 40,
  },
  input_container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  botao: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  botao_text: {
    paddingVertical: 20,
    backgroundColor: '#53FF50',
    borderRadius: 10,
    textAlign: 'center',
    color: "#000000",
    fontSize: 24,
    fontWeight: '700',
  },
  back: {
    marginLeft: 10,
    marginTop: 20,
    padding: 10,
  },
});
