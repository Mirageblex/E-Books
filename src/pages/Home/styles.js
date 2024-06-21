import { StyleSheet } from "react-native";


export default StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#2D3252',
          alignItems: 'center',
          justifyContent: 'center',
          gap:90,
          
        },
        texto:{
          color: "#FFFF",
          fontSize: 30,
          width:"100%",
          height:"100%",
          alignContent:"center",
          textAlign:"center",
          color:"black",
          fontWeight: '600',
        },
        
      
        button:{
          backgroundColor: "#F9B17A",
          width:"75%",
          height:80,
          alignItems:"center",
          alignContent:"center",
          borderRadius: 6  ,
        },
        livro:{
          width:90,
          height:90,
          marginLeft:10,
          resizeMode:"stretch",
        },
        titulo:{
          width:250,
          height:50,
         marginTop:10,
         resizeMode:"stretch",
        },
        cabecalho:{
          flexDirection:"row",
          height:201,
        }


});