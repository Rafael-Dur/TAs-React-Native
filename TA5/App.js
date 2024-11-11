import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageGallery from './components/ImageGallery';

const images = [
  { id: '1', src: 'image1.png', description: 'Imagen 1' },
  { id: '2', src: 'image2.png', description: 'Imagen 2' },
  { id: '3', src: 'image3.png', description: 'Imagen 3' },
  { id: '4', src: 'image4.png', description: 'Imagen 4' },
  { id: '5', src: 'image5.png', description: 'Imagen 5' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <ImageGallery images={images} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});
