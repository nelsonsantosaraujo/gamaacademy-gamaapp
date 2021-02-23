import React from 'react';
import { StyleSheet ,View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { HeaderProps } from '../interfaces';
import { useNavigation } from '@react-navigation/native';

export default function Header({title, showCancel = true}: HeaderProps) {2
  const navigation = useNavigation();

  function handleClose() {
    navigation.navigate('home');
  }

  return (
    <View style={styles.container}>
      <BorderlessButton 
        style={styles.returnButton}
        onPress={navigation.goBack}
      >
        <Feather name="chevron-left" size={20} color="#A100FF" />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {showCancel 
        ? (
        <BorderlessButton
          onPress={handleClose}
        >
          <Feather name="x" size={20} color="#A100FF" />
        </BorderlessButton>
        )
        : <View />
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#F9FAFC',
    borderBottomWidth: 1,
    borderColor: '#DDE3F0',
    paddingTop: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#797979',
    fontSize: 18,
  },
  returnButton: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});