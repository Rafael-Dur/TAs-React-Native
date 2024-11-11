import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ImageCard from './ImageCard';

const images = [
  { src: require('../assets/image1.png'), description: 'Bruce Wayne' },
  { src: require('../assets/image2.png'), description: 'The Batman en rojo' },
  { src: require('../assets/image3.png'), description: 'Batman entra a la escena del crimen' },
  { src: require('../assets/image4.png'), description: 'The Batman y su Batmobile en el fondo' },
  { src: require('../assets/image5.png'), description: 'The Batman cazando al Pingüino' },
  { src: require('../assets/image6.png'), description: 'Batman siguiendo las pistas del Ridler' },
  { src: require('../assets/image7.png'), description: 'The Batman tiene conflictos con la policía' },
  { src: require('../assets/image8.png'), description: 'The Batman & Catwoman' },
];

const ImageGallery = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ImageCard image={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'gray',
  },
});

export default ImageGallery;
