import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  AsyncStorage,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

import { SafeAreaView } from 'react-navigation';

import SpotList from '../components/SpotList';
import logo from '../assets/logo.png';

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(Stotagetechs => {
      if (Stotagetechs) {
        const techsArray = Stotagetechs.split(',').map(tech => tech.trim());
        setTechs(techsArray);
      }
    });
  }, []);

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
  }
});
