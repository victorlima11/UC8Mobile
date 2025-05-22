import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container :{
        justifyContent: 'center',
        marginTop: 50,
        padding: 30,
        backgroundColor: '#fff',
        borderRadius: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Raleway_400Regular',
        color: '#000',
        marginVertical: 10,
    },
    input: {
        height: 50,
        minWidth: 200,
        maxWidth: 200,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontFamily: 'Raleway_400Regular',
        backgroundColor: '#fff',
    },
    picker: {
        fontFamily: 'Raleway_300Light',

    },
    button: {
        marginTop: 20,
        backgroundColor: '#000',
        padding: 16,
        borderRadius: 8,
        alignContent: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Raleway_400Regular',
        fontWeight: 'bold',
    },
    placa: {
        textTransform: 'uppercase',
    }
});