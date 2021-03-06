import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  AsyncStorage,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import { SafeAreaView } from 'react-navigation';

import SpotList from '../components/SpotList';
import logo from '../assets/logo.png';

export default function List({ navigation }) {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(Stotagetechs => {
      if (Stotagetechs) {
        const techsArray = Stotagetechs.split(',').map(tech => tech.trim());
        setTechs(techsArray);
      }
    });
  }, []);

  function handleClear() {
    AsyncStorage.clear();
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <ScrollView>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
        {/* {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))} */}
        <TouchableOpacity onPress={handleClear} style={styles.button}>
          <Text style={styles.buttonText}>Nova busca</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // top: '5%'
  },
  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
  },
  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    margin: 20,
    marginTop: 30
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
