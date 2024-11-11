import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageCard = ({ image }) => (
  <View style={styles.imageContainer}>
    <Image source={image.src} style={styles.image} resizeMode="contain" />
    <Text style={styles.description}>{image.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    borderWidth: 5,
    borderColor: '#FF6666',
    borderRadius: 10,
    backgroundColor: '#1a1a1a',
  },
  image: {
    width: 300,
    height: 200,
  },
  description: {
    marginTop: 5,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ImageCard;
