import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from './Cadastro'
import CadastroLocal from './CadastroLocal'
import Sucesso from './Sucesso'

const Stack = createNativeStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Principal" component={Cadastro} />
      <Stack.Screen name="CadastroOrigem" component={CadastroLocal} />
      <Stack.Screen name="CadastroDestino" component={CadastroLocal} />
      <Stack.Screen name="Sucesso" component={Sucesso} />
    </Stack.Navigator>
  );
}