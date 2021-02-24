import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import AccentureLogo from '../images/Accenture.png';
import { useNavigation, useRoute } from '@react-navigation/native';

import { IAllUnits, IGetUnit, IHeaderProps } from '../interfaces';
import { getData } from '../services';

export default function Accenture() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as IGetUnit;

  const [unit, setUnit] = useState<IAllUnits>();

  useEffect(() => {
    getData.get(`find?id=${params.id}`).then(response => {
      setUnit(response.data);
    })
  }, [])


  function handlePushContact() {
    navigation.navigate('contact');
  }

  return (
    <ScrollView style={styles.scrollView}>
      {unit 
        ? (
          <View style={styles.container}>
            <Image 
              style={styles.topImage}
              source={{ uri: unit.profile}} 
            />
            <Image 
              style={styles.logo}
              source={AccentureLogo}
              width={ 232 }
              height={ 60 }
            />
            <Text style={styles.title}>{unit.name}</Text>
            <Text style={styles.paragraph}>{unit.describle}</Text>
            <Text style={styles.details}>País: {unit.country}</Text>
            <Text style={styles.details}>Estado: {unit.state}</Text>
            <Text style={styles.details}>Cidade: {unit.city}</Text>
            <Text style={styles.details}>Endereço: {unit.address.street}, {unit.address.number}</Text>
            <RectButton 
              style={styles.contactButton} 
              onPress={handlePushContact}
            >
              <Text style={styles.textButton}>Entrar em contato</Text>
              <Feather name="send" size={20} color="#A100FF" />
            </RectButton>
          </View>
        ) 
        : (
          <View style={styles.container}>
            <Text>Carregando ...</Text>
          </View>
        )
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: Dimensions.get('window').width
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  topImage: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  logo: {
    marginVertical: 40,
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
    marginHorizontal: 30,
    marginBottom: 12,
  },
  details: {
    marginVertical: 6,
    color: '#A1A1A1',
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