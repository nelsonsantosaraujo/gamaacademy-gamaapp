import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IAllUnits } from '../interfaces';

const AsyncStorageScreen: React.FC = () => {
  const [storageData, setStorageData] = useState<IAllUnits>({} as IAllUnits);
  const getData = async () => {
    try {
      const storageValue = await AsyncStorage.getItem('@accentureUnit')
      return storageValue && JSON.parse(storageValue);
    }catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function get(){
      const result = await getData();
      setStorageData(result);
    }

    get();
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{storageData.name}</Text>
      <Text style={styles.text}>{storageData.country}</Text>
      <Text style={styles.text}>{storageData.state}</Text>
    </View>
  );
}

export default AsyncStorageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  text: {
    fontSize: 14,
  }
});