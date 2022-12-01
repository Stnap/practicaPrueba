import React, {useState, useEffect, useContext} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {
  Modal,
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import equis from '../assets/equis.png';
import ListaProductos from './ListaProductos';

const Formulario = props => {
  const [cliente, setCliente] = useState('');
  const [id, setId] = useState(0);
  const [email, setEmail] = useState('');
  const [mesa, setMesa] = useState('');
  const [orden, setOrden] = useState('');
  const [rut, setRut] = useState('');
  const [fecha, setFecha] = useState('');

  const {modalVisible} = props;
  const {pedidos} = props;
  const {setPedidos} = props;
  const {setModalVisible} = props;
  const {pedido: pedidoObj} = props;
  const {setPedido: setPedidoApp} = props;

  const EnvioPedido = () => {
    if ([cliente, rut, mesa, email, orden, fecha].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios.', [
        {text: 'Ok'},
      ]);
      return;
    }

    setId(id + 1);

    pedidos.push({
      id: id,
      nombreCliente: cliente,
      mesaCliente: mesa,
      emailCliente: email,
      ordenCliente: orden,
      rutCliente: rut,
      fechaPedido: fecha,
      estadoPedido: 'ingresado',
    });

    setModalVisible(!modalVisible);

    setCliente('');
    setEmail('');
    setMesa('');
    setOrden('');
    setRut('');
    setFecha('');
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            <Text style={styles.tituloBold}>Pedido</Text>
          </Text>
          <View
            style={{
              height: 20,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                setCliente('');
                setEmail('');
                setMesa('');
                setOrden('');
                setFecha('');
              }}>
              <Image
                source={equis}
                style={{
                  height: 40,
                  width: 50,
                  paddingRight: 30,
                  marginRight: 30,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Mesa</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese mesa"
              placeholderTextColor={'#666'}
              keyboardType="phone-pad"
              value={mesa}
              onChangeText={setMesa}
              maxLength={12}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese nombre"
              placeholderTextColor={'#666'}
              value={cliente}
              onChangeText={setCliente}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Rut</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese Rut"
              placeholderTextColor={'#666'}
              value={rut}
              onChangeText={setRut}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese Email"
              placeholderTextColor={'#666'}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Orden</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese orden"
              placeholderTextColor={'#666'}
              value={orden}
              onChangeText={setOrden}
              multiline={true}
              numberOfLines={4}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Fecha</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese Fecha"
              placeholderTextColor={'#666'}
              value={fecha}
              onChangeText={setFecha}
            />
          </View>

          <TouchableOpacity style={styles.btnNuevaCita} onPress={EnvioPedido}>
            <Text style={styles.btnNuevaCitaTexto}>{'Enviar'}</Text>
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
            height: 200,
            width: 410,
          }}>
          <ListaProductos />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: 'lightblue',
    flex: 1,
  },
  titulo: {
    fontSize: 40,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
  },
  tituloBold: {
    fontWeight: '700',
  },
  btnCancelar: {
    backgroundColor: 'red',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 50,
    justifyContent: 'flex-end',
  },
  campo: {
    marginHorizontal: 25,
  },
  label: {
    color: 'black',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '700',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    fontSize: 18,
  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: 'green',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

export default Formulario;
