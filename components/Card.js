import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import {Button} from 'react-native-paper';

function Card({
  mesa,
  rut,
  nombre,
  email,
  orden,
  fecha,
  eliminar,
  item,
  estado,
  entregado,
  cancelado,
}) {
  const {id} = item;
  return (
    <View style={styles.cardView}>
      <Button
        mode="contained"
        buttonColor="#CF443B"
        onPress={() => eliminar(id)}>
        Eliminar
      </Button>
      <Text style={{fontSize: 20, marginBottom: 1}}>Mesa: {mesa}</Text>
      <Text style={{fontSize: 20, marginBottom: 1}}>Nombre: {nombre}</Text>
      <Text style={{fontSize: 20, marginBottom: 1}}>Rut: {rut}</Text>
      <Text style={{fontSize: 20, marginBottom: 1}}>Email: {email}</Text>
      <Text style={{fontSize: 20, marginBottom: 1}}>Fecha: {fecha}</Text>
      <Text style={{fontSize: 20, marginBottom: 1}}>Orden: {orden}</Text>
      <Text style={{fontSize: 22, marginLeft: 55}}>Estado: {estado}</Text>
      <View style={styles.contenedorBotones}>
        <Button
          mode="contained-tonal"
          buttonColor="#3C7EB1"
          onPress={() => entregado(item)}>
          Entregado
        </Button>

        <Button
          mode="contained-tonal"
          buttonColor="#DB901D"
          onPress={() => cancelado(item)}>
          Cancelado
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 9,
    alignSelf: 'stretch',
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    alignSelf: 'stretch',
  },
  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    marginTop: 15,
  },
  btnEliminar: {
    backgroundColor: '#EF4444',
  },
  btnEntregado: {
    backgroundColor: 'blue',
  },
  btnCancelado: {
    backgroundColor: 'yellow',
  },
});
export default Card;
