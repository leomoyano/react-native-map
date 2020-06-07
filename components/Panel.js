import React from 'react';
import { StyleSheet, Dimensions, Button, View } from 'react-native';

export default () => {
    return (
        <View style={styles.panel}>
            <Button title='Lista' />
            <Button title='Mostrar/Ocultar' />
        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})