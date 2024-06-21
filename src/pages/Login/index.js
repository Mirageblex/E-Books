import { View, Text, TouchableOpacity ,Image,Alert} from "react-native";
import styles from './styles';
import { TextInput } from "react-native-web";
import {useEffect,useState  } from "react";
import { MaterialIcons } from '@expo/vector-icons'
import apiMockApi from '../../services/MockApi';

export default function Login({ navigation }) {
  function acessarTelainicial() {
    navigation.navigate('Telainicial');

  }
  function acessarhome() {
    navigation.navigate('Home');
  }


  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Adicionado para indicador de carregamento
  const [loginError, setLoginError] = useState(''); // Adicionado para mensagens de erro
  const [passwordError, setPasswordError] = useState(''); // Adicionado para mensagens de erro


  useEffect(() => {
    setLoginError(''); // Limpar mensagens de erro ao montar o componente
    setPasswordError('');
  }, []); // Executar apenas uma vez quando o componente é montado


  const fnValidar = async () => {
    setIsLoading(true); // Definir indicador de carregamento durante a busca de dados
    setLoginError(''); // Limpar mensagens de erro antes da chamada da API
    setPasswordError('');

    if (login.trim() === '') {
      setLoginError('Informe um email!');
      setIsLoading(false);
      return;
    }

    if (senha.trim() === '') {
      setPasswordError('Informe uma senha!');
      setIsLoading(false);
      return;
    }

    try {
      const response = await apiMockApi.get('USUARIOS');

      if (response.status === 200) {
        // Verifique se as credenciais do usuário correspondem a qualquer usuário da API
        const matchingUser = response.data.find(user => user.email === login && user.senha === senha);

        if (matchingUser) {
          alert('Login bem sucedido!');
          navigation.navigate('Telainicial'); // Ou sua tela desejada após o login bem-sucedido
        } else {
          setLoginError('Email ou senha incorretos.');
          alert('Email ou senha incorretos.');
        }
      } else {
        console.error('Erro ao buscar usuários:', response.data.message);
        setLoginError('Erro ao efetuar login. Tente novamente mais tarde.');
      }
    } catch (error) {
      console.error('Erro de login:', error);
      setLoginError('Erro ao efetuar login. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false); // Limpar indicador de carregamento após a chamada da API
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Image source={require('./../../../imgs/titulo.png')} style={styles.titulo} />
          <Image source={require('./../../../imgs/livro.png')} style={styles.livro} />
        </View>
      </View>
    <View style={styles.container2} > 
      <Text style={styles.texto2}>
        LOGIN
      </Text>

      
<View style={{justifyContent:"space-around",height:300}}> 
      <TextInput style={styles.input}
        keyboardType='email-address' 
        placeholder='E-Mail'
        placeholderTextColor={"#363636"}
        value={login}
          onChangeText={(text) => setLogin(text)}/>

    

      <TextInput style={styles.input}
        secureTextEntry={true}
        keyboardType='password' 
        placeholder='Senha'
        placeholderTextColor={"#363636"}
        value={senha}
        onChangeText={(text) => setSenha(text)} />

      <TouchableOpacity style={styles.button}
        onPress={fnValidar}
      >
        <Text style={styles.texto3}> 
          ENTRAR
        </Text>
      </TouchableOpacity>
      </View>
      </View>

      <TouchableOpacity style={styles.button2} onPress={acessarhome}>
      <MaterialIcons
            name={'keyboard-backspace'}
            size={30}
            color={'#FFFFFF'}
            style={{ justifyContent: 'center', alignItems: 'center',paddingBottom:18, }}
          ></MaterialIcons>

      </TouchableOpacity>
    </View>
  );
}