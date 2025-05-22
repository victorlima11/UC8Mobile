import { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Picker } from '@react-native-picker/picker';

export default function Form() {

    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    const [cor, setCor] = useState('');
    const [placa, setPlaca] = useState('');
    const [itemSelecionado, setItemSelecionado] = useState('');
    const [corSelecionada, setCorSelecionada] = useState('');

    const pickerRef = useRef();


    return (
        <View style={styles.container}>
            <Text style={styles.label}>Modelo</Text>
            <TextInput
                style={styles.input}
                allowFontScaling={false}
                placeholder="Digite o modelo do carro"
                placeholderTextColor={'#000'} />
            <Text style={styles.label}>Marca</Text>
            <Picker
                ref={pickerRef}
                selectedValue={itemSelecionado}
                onValueChange={(itemValue) => setItemSelecionado(itemValue)}
                style={ styles.picker }
            >
                {itemSelecionado === '' && (
                    <Picker.Item label="Selecione a marca" value="" enabled={false} />
                )}
                <Picker.Item label="Chevrolet" value="chevrolet" />
                <Picker.Item label="Fiat" value="fiat" />
                <Picker.Item label="Ford" value="ford" />
                <Picker.Item label="Honda" value="honda" />
                <Picker.Item label="Hyundai" value="hyundai" />
                <Picker.Item label="Nissan" value="nissan" />
                <Picker.Item label="Peugeot" value="peugeot" />
                <Picker.Item label="Renault" value="renault" />
            </Picker>
            <Text style={styles.label}>Cor</Text>
                <Picker
                    selectedValue={cor}
                    onValueChange={(itemValue) => setCorSelecionada(itemValue)}
                    >
                    { corSelecionada === '' && <Picker.Item label="Selecione a cor" value="" enabled={false} />}
                    <Picker.Item label="Preto" value="preto" />
                    <Picker.Item label="Branco" value="branco" />
                    <Picker.Item label="Prata" value="prata" />
                    <Picker.Item label="Vermelho" value="vermelho" />
                    <Picker.Item label="Azul" value="azul" />
                    <Picker.Item label="Verde" value="verde" />
                    <Picker.Item label="Amarelo" value="amarelo" />
                    <Picker.Item label="Laranja" value="laranja" />
                    </Picker>
            <Text style={styles.label}>Ano</Text>
            <TextInput
                keyboardType="numeric"
                placeholderTextColor={"#000"}
                style={styles.input}
                placeholder="Digite o ano do carro" />
            <Text style={styles.label}>Placa</Text>
            <TextInput
                placeholderTextColor={"#000"}
                maxLength={7}
                autoCapitalize='characters'
                style={styles.input}
                placeholder="Digite o ano do carro" />
             <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
             </TouchableOpacity>
        </View>
    )
}