import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import LottieView from 'lottie-react-native';
import { Feather } from '@expo/vector-icons';

import logoAccenture from '../images/Accenture.png';
import { RectButton } from 'react-native-gesture-handler';
import { contactSend } from '../services';
import { useNavigation } from '@react-navigation/native';


export default function Contact(){
  const navigation = useNavigation()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSendMessage, setIseSendMessage] = useState(false);

  function sendAccentureMessage() {
    setIseSendMessage(true);

    const postData = {
      name,
      email,
      phone,
      message,
    };

    contactSend.post('', postData).then(
      response => {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setTimeout(() => {
          setIseSendMessage(false);
        }, 5000);
      }
    )
  }

  function handlePushCamera(){
    navigation.navigate('camera');
  }

  function handlePushStorage(){
    navigation.navigate('storage');
  }

  return (
    <ScrollView style={styles.scrollView}>
      <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>
        <View style={styles.container}>
          { isSendMessage 
            ? (
              <>
                <View style={styles.sendView}>
                  <Text style={styles.sendText}>Sua mensagem</Text>
                  <Text style={styles.sendText}>Foi enviada!</Text>
                </View>
                <LottieView
                  style={styles.animationContent}
                  source={require('../animations/gradient.json')}
                  autoPlay
                />
              </>
            )
            : (
              <>
                <Image 
                  style={styles.topImage}
                  source={{ uri: 'https://startupi.com.br/wp-content/uploads/2020/01/accenture-1.jpg'}} 
                />
                <Image 
                  style={styles.accentureLogo}
                  source={logoAccenture}
                />
                <Text style={styles.title}>Formulário de Contato</Text>
                <View>
                  <Text style={styles.labelForm}>Seu nome:</Text>
                  <TextInput 
                    style={styles.inputForm}
                    value={name}
                    onChangeText={text => setName(text)}
                  />
                  <Text style={styles.labelForm}>Seu telefone:</Text>
                  <TextInput 
                    style={styles.inputForm}
                    value={phone}
                    onChangeText={text => setPhone(text)}
                  />
                  <Text style={styles.labelForm}>Seu email:</Text>
                  <TextInput 
                    style={styles.inputForm}
                    value={email}
                    onChangeText={text => setEmail(text)}
                  />
                  <Text style={styles.labelForm}>Deixe sua mensagem:</Text>
                  <TextInput 
                    style={styles.inputFormMultiline}
                    multiline
                    value={message}
                    onChangeText={text => setMessage(text)}
                  />
                  <RectButton style={styles.sendButton} onPress={sendAccentureMessage}>
                    <Text style={styles.textSendButton}>Enviar mensagem</Text>
                    <Feather name="send" size={20} color="#A100FF" />
                  </RectButton>
                  <View style={styles.divider} />
                  <RectButton style={styles.sendButton} onPress={handlePushCamera}>
                    <Text style={styles.textSendButton}>Abrir Camera</Text>
                    <Feather name="camera" size={20} color="#A100FF" />
                  </RectButton>
                  <View style={styles.divider} />
                  <RectButton style={styles.sendButton} onPress={handlePushStorage}>
                    <Text style={styles.textSendButton}>Abrir AsyncStorage</Text>
                    <Feather name="database" size={20} color="#A100FF" />
                  </RectButton>
                </View>
              </>
            )
          }
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  scrollView: {
    width: Dimensions.get('window').width
  },
  topImage: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  accentureLogo: {
    marginVertical: 6,
    width: 200,
    height: 52,    
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
    color: '#A100FF',
  },
  sendView:{
    marginVertical: 40,
  },
  sendText: {
    color: '#A100FF',
    fontSize: 24,
    textAlign: 'center',
  },
  animationContent: {
    marginTop: 20,
    height: 300,
    width: 300,
  },
  labelForm: {
    marginTop: 22,
  },
  inputForm: {
    paddingHorizontal: 20,
    height: 50,
    width: Dimensions.get('window').width -60,
    borderWidth: 1,
    borderColor: '#b9b7b7',
    borderRadius: 12,
    marginVertical: 5,
  },
  inputFormMultiline: {
    paddingHorizontal: 20,
    height: 120,
    width: Dimensions.get('window').width -60,
    borderWidth: 1,
    borderColor: '#b9b7b7',
    borderRadius: 12,
    marginVertical: 5,
  },
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  textSendButton: {
    color: '#A100FF',
    fontSize: 20,
    marginRight: 6,
  },
  divider: {
    width: 350,
    height: 2,
    alignSelf: 'center',
    backgroundColor: '#rgba(0,0,0,0.05)',
    marginTop: 20,
  }
});