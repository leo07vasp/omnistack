import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import DateTimePicker from '@react-native-community/datetimepicker';

import api from '../services/api';

export default function Book({ navigation }) {
  const id = navigation.getParam('id');
  const item = navigation.getParam('item');

  const [date, setDate] = useState('');

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user');
    await api.post(
      `/spots/${id}/bookings`,
      {
        date
      },
      {
        headers: {
          user_id
        }
      }
    );

    Alert.alert('Solicitação de reserva enviada.');
    navigation.navigate('List');
  }

  function handleCancel() {
    navigation.navigate('List');
  }

  return (
    <View>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
        <Text style={[styles.about, styles.company]}>
          Empresa : {item.company}
        </Text>
        <Text style={styles.about}>
          Valor : {item.price ? `R$${item.price}/dia` : 'Grauito'}
        </Text>
        <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }} />

        {/* <View>
          <TouchableOpacity style={styles.button} title="Show date picker!">
            <Text style={styles.buttonText}>Selecionar data</Text>
          </TouchableOpacity>
        </View> */}

        {/* <DateTimePicker
          value={new Date('2020-06-12T14:42:42')}
          is24Hour={true}
          mode={'date'}
          show={true}
          display="default"
        /> */}

        <Text style={styles.label}>Data de interesse *</Text>

        <TextInput
          style={styles.input}
          placeholder="Qual data você quer reservar ?"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={date}
          onChangeText={setDate}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Solicitar reserva</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleCancel}
          // onPress={() => {
          //   navigation.navigate('List');
          // }}
          style={[styles.button, styles.CancelButton]}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    marginTop: 30
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ddd',
    paddingHorizontal: 20,
    borderRadius: 2,
    fontSize: 16,
    height: 44,
    marginBottom: 20
  },
  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  CancelButton: {
    backgroundColor: '#ccc',
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  about: {
    fontSize: 16
  },
  company: {
    fontWeight: 'bold'
  }
});
