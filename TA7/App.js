import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import axios from 'axios';
import SearchInput from './components/SearchInput';
import MovieDisplay from './components/MovieDisplay';
import ErrorMessage from './components/ErrorMessage';

const API_KEY = '2d7c3cc6';
export default function App() {
  const [searchText, setSearchText] = useState('');
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  const searchMovie = async () => {
    if (searchText.trim() === '') {
      setError('Por favor, ingresa el nombre de una película');
      setMovie(null);
      return;
    }

    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${searchText}`);
      if (response.data.Response === 'True') {
        setMovie(response.data);
        setError('');
      } else {
        setMovie(null);
        setError('No se encontró la película.');
      }
    } catch (err) {
      console.error(err);
      setError('Ocurrió un error al buscar la película.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Buscador de Películas</Text>

      <SearchInput 
        searchText={searchText} 
        setSearchText={setSearchText} 
        onSearch={searchMovie} 
      />

      <ErrorMessage error={error} />

      <MovieDisplay movie={movie} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff',
  },
});
