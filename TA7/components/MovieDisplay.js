import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function MovieDisplay({ movie }) {
  if (!movie) return null;

  return (
    <View style={styles.container}>
      {movie.Poster && movie.Poster !== 'N/A' && (
        <Image source={{ uri: movie.Poster }} style={styles.poster} />
      )}
      <Text style={styles.title}>{movie.Title}</Text>
      <Text style={styles.plot}>{movie.Plot}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  poster: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  plot: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});
