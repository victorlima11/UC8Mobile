import React, { useState } from 'react';
import { Button, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFonts, Raleway_400Regular, Raleway_300Light, Raleway_200ExtraLight, Raleway_400Regular_Italic } from '@expo-google-fonts/raleway';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundGradient from '../components/BackgroundGradient/BackgroundGradient';
import Title from '../components/Title/Title';
import styles from './styles';
import Form from '../components/Form/Form';

export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_400Regular_Italic,
    Raleway_400Regular,
    Raleway_300Light,
    Raleway_200ExtraLight,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <BackgroundGradient
      colors={['#1565c0', 'black']}
      start={{ x: 0, y: 0 }}
      end={{ x:0, y: 0.8 }} >
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Title titulo={"Cadastro de Carros"} />
        <Form />
      </ScrollView>
    </BackgroundGradient>
  );
}