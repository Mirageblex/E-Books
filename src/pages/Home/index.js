
import { View, Text } from "react-native";
import styles from './styles';

export default function Home({ navigation}){
    function acessarCadastro(){
        navigation.navigate('Cadastro');

    }
    return(
        <View style={styles.container}>
            <Text>
                Estou na Home
            </Text>
        </View>
    );
}