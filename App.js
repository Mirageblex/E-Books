import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro'; 
import Login from './src/pages/Login'; 
import Telainicial from './src/pages/Telainicial'; 

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={Home}
        />
      <Stack.Screen 
        name="Login" 
        component={Login}
        />
      <Stack.Screen 
       name="Cadastro"
       component={Cadastro}/>
       <Stack.Screen 
       name="Telainicial"
       component={Telainicial}
       options={{

        title:"Pagina inicial"
      }} 
       />
    </Stack.Navigator>
   </NavigationContainer>
  );
}
