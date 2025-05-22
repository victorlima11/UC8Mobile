import { View, Text } from 'react-native'
import styles from './styles'

export default function Title({ titulo}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{titulo}</Text>
        </View>
    )
}