import { useState } from 'react';
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

    const submitHandler = () => {
        alert(`Modelo: ${modelo}, Marca: ${marca}, Cor: ${corSelecionada}, Ano: ${ano}, Placa: ${placa}`);
        setModelo('');
        setMarca('');
        setAno('');
        setCor('');
        setPlaca('');
        setItemSelecionado('');
        setCorSelecionada('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Modelo</Text>
            <TextInput
                style={styles.input}
                allowFontScaling={false}
                placeholder="Digite o modelo do carro"
                placeholderTextColor={'#000'}
                value={modelo}
                onChangeText={setModelo}
            />
            <Text style={styles.label}>Marca</Text>
            <Picker
                style={styles.picker}
                selectedValue={itemSelecionado}
                onValueChange={(itemValue) => {
                    setItemSelecionado(itemValue);
                    setMarca(itemValue);
                }}
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
                selectedValue={corSelecionada}
                onValueChange={(itemValue) => setCorSelecionada(itemValue)}
            >
                {corSelecionada === '' && <Picker.Item label="Selecione a cor" value="" enabled={false} />}
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
                placeholder="Digite o ano do carro"
                value={ano}
                onChangeText={setAno}
            />
            <Text style={styles.label}>Placa</Text>
            <TextInput
                placeholderTextColor={"#000"}
                maxLength={7}
                autoCapitalize='characters'
                style={styles.input}
                value={placa}
                onChangeText={text => setPlaca(text.toUpperCase())}
                placeholder="Digite o ano do carro"
            />
            <TouchableOpacity style={styles.button} onPress={submitHandler}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}