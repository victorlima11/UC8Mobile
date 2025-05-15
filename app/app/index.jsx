import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

export default function App(){
    const handlerPress = () => {
        console.log("click")
    };

    return(
        <View>
            <SafeAreaView style={styles.container}>
                <SectionTitle>Bem-vindo ao App</SectionTitle>
            </SafeAreaView>
            <Card title="Titulo Card" content="Conteúdo Card" />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#f2f2f2',
    },
});