import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro'; 

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Cadastro">
      <Stack.Screen 
        name="Home" 
        component={Home}
        />
      <Stack.Screen 
       name="Cadastro"
       component={Cadastro}
       options={{
        headerShown: false
      }} 
       />
    </Stack.Navigator>
   </NavigationContainer>
  );
}
