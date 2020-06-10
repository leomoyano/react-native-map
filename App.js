import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components';

export default function App() {

  const [puntos, setPuntos] = useState([])
  const [puntoTemp, setPuntoTemp] = useState({})
  const [nombre, setNombre] = useState('')
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto') // New_Punto or All_puntos
  const [visibility, setVisibility] = useState(false)
  const [pointsFilter, setPointsFilter] = useState(true)


  const togglePointsFilter = () => {setPointsFilter(!pointsFilter)}

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = text => {
    setNombre(text)
  }

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre };
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }

  const handleLista = () => {
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter}/>
      <Panel onPressLeft={handleLista} textLeft="List" togglePointsFilter={togglePointsFilter} />
      <Modal visibility={visibility}>
        {visibilityFilter == 'new_punto' ?
          <View style={styles.form}>
            <Input style={styles.submitInput} title={"Nombre"} placeholder={"Nombre del Punto"} onChangeText={handleChangeText} />
            <Button style={styles.submitBotton} title={"Aceptar"} onPress={handleSubmit} />
            </View>
          :   <List puntos={puntos} closeModal={() => setVisibility(false)} />
  }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15,
    height: 120,
  },
  submitInput: {
    backgroundColor: '#ccc',
  },
  submitButton: {
  },
  container: {
        flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
