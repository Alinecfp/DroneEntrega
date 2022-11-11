import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Stacks from './Stacks'

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: "#46177C", height: 60}, tabBarLabelStyle: {marginTop: 'auto', marginBottom: 'auto', fontWeight: "700", fontSize: 22, color: "#FFF"}, tabBarIconStyle: { display: "none" }}}>
      <Tab.Screen name="Cadastro" component={Stacks} />
    </Tab.Navigator>
  );
}