import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';

function ListaProductos(props) {
  const [productos, setProductos] = useState([]);
  const getProducts = () => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(datos => {
        setProductos(datos.products);
        console.log(productos);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  {
    return (
      <View>
        <FlatList
          data={productos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Card>
              <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph>{item.category} </Paragraph>
              </Card.Content>
              <Card.Cover source={{uri: item.images[0]}} />
              <Card.Content>
                <Title>${item.price}</Title>
                <Paragraph>{item.description}</Paragraph>
              </Card.Content>
              <Card.Actions></Card.Actions>
            </Card>
          )}
        />
      </View>
    );
  }
}

export default ListaProductos;
