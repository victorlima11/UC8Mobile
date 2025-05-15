import React from "react";
import {View, Text, StyleSheet} from "react-native"

export default SectionTitle = ({children}) => {
    return(
        <View style={styles.container}>
            <Text>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 16,
        backgroundColor: 'red',
    },
    titulo:{
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        paddingBottom: 4,
    },
})