import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Constants from 'expo-constants';

import { Mostrar } from '../components/CadastrarEntrega'

export default function Cadastro() {
  const navigation = useNavigation()

  const route = useRoute();
  custo = 0
  
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.header}>
            <Image style={styles.icon} source={require('./../assets/drone_icon.png')} />
            <Image style={styles.icon} source={require('./../assets/nome_servico.png')} />
          </View>
          <View style={styles.body}>
            <Text style={styles.texto_body}>Registrar endereço de origem</Text>
            <View style={styles.input_container}>
              <Text style={[styles.input, styles.inativo]}>{Mostrar(route.params, 'origem')}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('CadastroOrigem', route.params)} style={styles.botao}>
              <Text style={styles.botao_text}>Registrar</Text>
            </TouchableOpacity>

            <Text style={styles.texto_body}>Registrar endereço de destino</Text>
            <View style={styles.input_container}>
              <Text style={[styles.input, styles.inativo]}>{Mostrar(route.params, 'destino')}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('CadastroDestino', route.params)} style={styles.botao}>
              <Text style={styles.botao_text}>Registrar</Text>
            </TouchableOpacity>

            <Entrega/>

            <TouchableOpacity onPress={() => {
              if (custo != 0) { 
                navigation.navigate('Sucesso', {custo: custo})
              }
              }} style={[styles.botao, styles.botao_cadastrar]}>
              <Text style={[styles.botao_text, styles.cadastro_text]}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
let peso = 0;
let custo = 0

function Entrega() {
  const [ativo, setAtivo] = useState(false)

  function Custo() {
    if (peso > 0 && peso <= 2) {
      custo = Math.round(Math.random() * 100) * 3
    }
    else if (peso > 2 && peso <= 5) {
      custo = Math.round(Math.random() * 100) * 5
    }
    return custo
  }

  function Peso(valor, route) {
    peso = valor

    if (route.params === undefined) {
      setAtivo(false)
      return
    }

    if (peso > 0 && peso <= 5 && route.params.origem !== undefined && route.params.destino !== undefined) {
      setAtivo(true)
    }
    else {
      custo = 0
      setAtivo(false)
    }
  }
  const route = useRoute();

  return(
    <View>
      <Text style={styles.texto_body}>Peso estimado da encomenda (Até 5KG)</Text>
      <View style={styles.input_container}>
        <TextInput onChangeText={text => Peso(text, route)} style={[styles.input, styles.ativo]} keyboardType="numeric" />
        <Text style={[styles.peso_text, styles.texto_body]}>Kg</Text>
      </View>

      <View style={ativo?styles.valor:styles.none}>
        <Text style={styles.texto_body}>Valor estimado</Text>
        <Text style={[styles.texto_body, styles.destaque]}>R$ {ativo?Custo():custo}</Text>
      </View>
    </View>
  )
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
    marginTop: 32,
  },
  texto_body: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    flexGrow: 1,
    backgroundColor: '#BEBDBD',
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  inativo: {
    backgroundColor: '#BEBDBD',
  },
  ativo: {
    backgroundColor: '#FFFFFF',
  },
  input_container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  peso_text: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginHorizontal: 20,
    textAlign: 'center',
  },
  botao: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  botao_text: {
    paddingVertical: 20,
    paddingHorizontal: 60,
    backgroundColor: '#46177C',
    borderRadius: 10,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  cadastro_text: {
    backgroundColor: '#53FF50',
    color: '#000000',
    fontSize: 24,
  },
  botao_cadastrar: {
    marginTop: 60,
    width: '100%',
  },
  valor: {
    paddingTop: 60,
  },
  none: {
    display: 'none',
  },
  destaque: {
    fontSize: 28,
  },
});
