import { Text, View, StyleSheet, Image } from "react-native";
import { useRoute } from '@react-navigation/native';
import Constants from "expo-constants";

export default function Sucesso() {
  const route = useRoute();

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image
            style={styles.icon}
            source={require("./../assets/drone_icon.png")}
        />
        <Image
            style={styles.icon}
            source={require("./../assets/nome_servico.png")}
        />
        </View>

        <View style={styles.body}>
            <Text style={styles.mensagem}>Solicitação realizada com sucesso!</Text>
            <View style={styles.bottom}>
                <Text style={styles.preco}>Valor estimado</Text>
                <Text style={styles.destaque}>R$ {route.params.custo}</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#1E1E1E",
    position: "relative",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#232323",
    padding: 10,
  },
  icon: {
    marginVertical: "auto",
    marginRight: 7,
  },
  body: {
    position: "relative",
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 8,
    position: "relative",
    marginTop: 32,
  },
  mensagem: {
    backgroundColor: "#46177C",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 24,
    paddingHorizontal: 15,
    paddingVertical: 60,
    color: "#FFFFFF",
    borderRadius: 30,
    alignSelf: "center",
    marginBottom: 100,
    fontWeight: '600',
    lineHeight: 45,
  },
  preco: {
    fontSize: 20,
    color: "#FFFFFF",
    alignSelf: "center",
  },
  destaque: {
    fontSize: 30,
    color: "#53FF50",
    alignSelf: "center",
    fontWeight: '700',
  },
  bottom: {
    alignSelf: 'center',
    position: "absolute",
    bottom: 0,
    marginBottom: 100,
  },
  height: {
    height: '100%',
  }
});
