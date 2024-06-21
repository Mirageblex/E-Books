import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2D3252',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width:"100%"
    },
    header: {
        flexDirection:"column",
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20, 
        backgroundColor:"#3F4673",
        height:150,
    },
    searchButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchButtonText: {
        color: "#FFF",
        fontSize: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    genreButton: {
        backgroundColor: "#F9B17A",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 20,
        marginTop: 20, 
        marginLeft:22,
        width:220,
       
    },
    genreButtonText: {
        color: "#000",
        fontSize: 18,
        fontWeight: 'bold',
        fontSize:22,
        width:"100%",
        textAlign:'center',
    },
    addButton: {
        backgroundColor: "#F9B17A",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft:65,
    },
    addButtonText: {
        color: "#000",
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom:5,
    },
    header2: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        backgroundColor:"#3F4673",
        height:100,
        marginTop:502,
    },

    livro:{
        marginTop:20,
        width:50,
        height:50,
        marginLeft:10,
        marginRight:10,
        resizeMode:"stretch",
      },
      
      titulo:{
       
        marginRight:10,
        width:150,
        height:30,
       marginTop:30,
       resizeMode:"stretch",
      },
      saph:{
        marginTop:5,
        width:70,
        height:70,
        borderRadius:50,
        marginLeft:5,
        resizeMode:"stretch",
      },
      cabecalho:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height:30,
    
      },
      button2:{
        backgroundColor: "#F9B17A",
        borderRadius: 50,  
        width:80,
        marginTop:8,
        height:80,
        marginLeft:5,
       
      },
});