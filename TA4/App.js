import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ImageDisplay from './components/ImageDisplay';
import ChangeImageButton from './components/ChangeImageButton';

export default function App() {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    require('./assets/image1.png'),
    require('./assets/image2.png'),
  ];

  const handleChangeImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  return (
    <View style={styles.container}>
      <ImageDisplay source={images[imageIndex]} />

      <ChangeImageButton onPress={handleChangeImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
});
