import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import AccentureLogo from '../images/Accenture.png';

export default function screens() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={AccentureLogo}
        width={ 232 }
        height={ 60 }
      />
      <Text style={styles.title}>Accenture</Text>
      <Text style={styles.paragraph}>Texto complementar</Text>
      <RectButton 
        style={styles.contactButton} 
        onPress={() => alert('Olá')}
      >
        <Text style={styles.textButton}>Entrar em contato</Text>
        <Feather name="send" size={20} />
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    marginBottom: 20,
    width: 232,
    height: 60,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
    color: '#8F8F8F',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'left',
    color: '#B8B8B8',
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },
  textButton: {
    color: '#A100FF',
    fontSize: 18,
    marginRight: 18,
  }
})