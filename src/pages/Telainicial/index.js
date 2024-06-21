import { View, Text, TouchableOpacity ,Image} from "react-native";
import styles from './styles';
import { TextInput } from "react-native-web";
import { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons'


export default function Login({ navigation }) {
    function acessarHome() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
           
            <View style={styles.header}>
            <View style={styles.cabecalho}>
        <Image source={require('./../../../imgs/titulo.png')} style={styles.titulo} />
        <Image source={require('./../../../imgs/livro.png')} style={styles.livro} />
        <TouchableOpacity style={styles.button2} onPress={acessarHome}>
        <Image source={require('./../../../imgs/saph.jpeg')} style={styles.saph} />
      </TouchableOpacity>
      </View>


      <View style={{flexDirection:"column", marginTop:70, marginLeft:295,height:40, width:40}}>
        <TouchableOpacity >
        <MaterialIcons
            name={'search'}
            size={40}
            color={'#FFFFFF'}
            style={{ justifyContent: 'center', alignItems: 'center',height:40 ,width:40 }}
          ></MaterialIcons>
      </TouchableOpacity>
      </View>
            </View>



            <View style={styles.content}>
                <View style={{flexDirection: 'row', width:"100%"}}> 
                    
                <TouchableOpacity style={styles.genreButton}>
                    <Text style={styles.genreButtonText}>FANTASIA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity> </View>
                

                <View style={styles.header2}>


                </View>
            </View>
        </View>
    );
}