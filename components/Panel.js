import React from 'react';
import { StyleSheet, Dimensions, Button, View } from 'react-native';

export default ({textLeft, onPressLeft, togglePointsFilter }) => {
    return (
        <View style={styles.panel}>
            <Button title={textLeft} onPress={onPressLeft} />
            <Button title='Mostrar/Ocultar' onPress={togglePointsFilter} />
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