import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2D3252',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        marginBottom: 20, 
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
    },
    genreButtonText: {
        color: "#000",
        fontSize: 18,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: "#F9B17A",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    addButtonText: {
        color: "#000",
        fontSize: 30,
        fontWeight: 'bold',
    },
});