import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  Image,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import equis from './assets/equis.png';
import Formulario from './components/Formulario';
import Card from './components/Card';
import ListaProductos from './components/ListaProductos';

const App = () => {
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

  const [pedidos, setPedidos] = useState([]);
  const [pedido, setPedido] = useState({});
  const [productos, setProductos] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [formularioVisible, setFormularioVisible] = useState(false);
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  const PedidoCancelado = async item => {
    item.estadoPedido = 'cancelado';
    setModalVisible(!modalVisible);
    await delay(100);
    setModalVisible(true);
  };
  const PedidoEntregado = async item => {
    item.estadoPedido = 'entregado';
    setModalVisible(!modalVisible);
    await delay(100);
    setModalVisible(true);
  };

  const PedidoEliminar = id => {
    console.log(pedidos);
    Alert.alert('¿Quieres eliminar el pedido?', '', [
      {text: 'Cancelar'},
      {
        text: 'Eliminar',
        onPress: () => {
          const pedidosActualizados = pedidos.filter(
            pedidoState => pedidoState.id !== id,
          );
          setPedidos(pedidosActualizados);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 100,
          height: 70,
          width: 200,
        }}>
        <Button
          title="Ver Pedidos           (Mesero)"
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>
      <View
        style={{
          height: 80,
          width: 200,
        }}>
        <Button
          title="Realizar Pedido (Cliente)"
          onPress={() => {
            setFormularioVisible(true);
          }}
        />
      </View>
      <View
        style={{
          height: 400,
          width: 400,
        }}>
        <ListaProductos />
      </View>
      <Modal
        animationType="slide"
        onDismiss={() => console.log('Modal close')}
        onShow={() => console.log('Modal open')}
        transparent
        visible={modalVisible}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(1,1,1, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: '80%',
              width: '90%',
              backgroundColor: '#fff',
            }}>
            <View
              style={{
                height: 45,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignContent: 'center',
                paddingHorizontal: 8,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Image source={equis} style={{height: 30, width: 30}} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={pedidos}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <Card
                  item={item}
                  mesa={item.mesaCliente}
                  rut={item.rutCliente}
                  nombre={item.nombreCliente}
                  email={item.emailCliente}
                  orden={item.ordenCliente}
                  fecha={item.fechaPedido}
                  eliminar={PedidoEliminar}
                  estado={item.estadoPedido}
                  entregado={PedidoEntregado}
                  cancelado={PedidoCancelado}
                />
              )}></FlatList>
          </View>
        </View>
      </Modal>
      <Formulario
        modalVisible={formularioVisible}
        setModalVisible={setFormularioVisible}
        pedidos={pedidos}
        setPedidos={setPedidos}
        pedido={pedido}
        setPedido={setPedido}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
    backgroundColor: 'lightyellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
