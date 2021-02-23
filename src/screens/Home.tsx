import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import PinInsert from '../images/Pin.png';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  function handlePageDetails() {
    navigation.navigate('accenture')
  }
  
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: +0.054060,
          longitude: -51.052250,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker 
          icon={PinInsert}
          coordinate={{
            latitude: +0.054060,
            longitude: -51.052250,
          }}
        >
          <Callout
            tooltip={true}
            onPress={handlePageDetails}
          >
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Aqui estou!</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Texto qualquer</Text>
        <RectButton style={styles.findButton}>
          <Feather name="search" size={20} color={'#fff'} />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText: {
    color: '#A100FF',
    textAlign: 'center',
    fontSize: 14,
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 24,
    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: '#8FA7B3',
  },
  findButton: {
    height: 56,
    width: 56,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A100FF',
  }
});
