import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from './styles';
import { TextInput } from "react-native-web";
import { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons'
import apiMockApi from '../../services/MockApi';

export default function Login({ navigation }) {

  function acessarTelainicial() {
    navigation.navigate('Telainicial');

  }

  function acessarhome() {
    navigation.navigate('Home');
  }




 
  const [email, setEmail] = useState('');
  const [senha1, setSenha1] = useState('');
  const [senha2, setSenha2] = useState('');

  function fnValidar() {
   
    const sEmail = email.trim();
    const sSenha1 = senha1.trim();
    const sSenha2 = senha2.trim();

    if (!sEmail || !sSenha1 || sSenha1 !== sSenha2) {
      // Handle validation errors
      if (!sEmail) alert("Informe um email!");
      if (!sSenha1) alert("Informe uma senha!");
      if (sSenha1 !== sSenha2) alert("As senhas devem ser iguais!");
      return;
    }

    handleRegister();
  }
  function handleRegister() {
    const dados = {
      "email": email,
      "senha": senha1,
    };

    apiMockApi
      .post("USUARIOS", dados)
      .then((response) => {
        if (response.status === 201) {
          alert("Usuário cadastrado com sucesso!");
          setEmail('');
          setSenha1('');
          setSenha2('');
        } else {
          alert("Erro ao cadastrar usuário!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Erro ao cadastrar usuário!");
      });
  }

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
          CADASTRO
        </Text>
    


        <View style={{ justifyContent: "space-around", height: 400,marginBottom:-80 }}>
          <TextInput style={styles.input}
            keyboardType='email-address'
            placeholder='E-Mail'
            placeholderTextColor={"#363636"}
            value={email}
            onChangeText={(text) => setEmail(text)} />



          <TextInput style={styles.input}
            secureTextEntry={true}
            keyboardType='password'
            placeholder='Senha'
            placeholderTextColor={"#363636"}
            value={senha1}
            onChangeText={(text) => setSenha1(text)} />

          <TextInput style={styles.input}
            secureTextEntry={true}
            keyboardType='password'
            placeholder='Confirmar Senha'
            placeholderTextColor={"#363636"}
            value={senha2}
           onChangeText={(text) => setSenha2(text)}
             />
          <TouchableOpacity style={styles.button}
           onPress={fnValidar}
          >
            <Text style={styles.texto3}>
              CRIAR
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.button2} onPress={acessarhome}>
        <MaterialIcons
          name={'keyboard-backspace'}
          size={30}
          color={'#FFFFFF'}
          style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 18, }}
        ></MaterialIcons>

      </TouchableOpacity>
    </View>
  );
}