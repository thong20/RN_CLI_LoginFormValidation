/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable';

const consoleLog = n => console.log('****** SignInComponent.js -- line: ' + n + ' ******');

SignInComponent.propTypes = {

};

SignInComponent.defaultProps = {

};

export default function SignInComponent(props) {
  const {navigation} = props

  const [check_textInputChange, setCheck_textInputChange] = useState(false)
  const [password, setPassword] = useState('')
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const [data, setData] = useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
  })

  const textInputChange = (value) => {
    if(value.length !== 0){
      setCheck_textInputChange(true)
    }else{
      setCheck_textInputChange(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome Tharo!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>E-Mail:</Text>
        <View style={styles.action}>
        <FontAwesome name='user-o' color='#05375a' size={20}/>
        <TextInput
          placeholder="Your email..."
          onChangeText={(text) => textInputChange(text)}
          style={styles.textInput}
        />

        {
          check_textInputChange
          ? <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          : null
        }

        </View>
      
        <Text style={[styles.text_footer, {marginTop: 35}]}>Password:</Text>
        <View style={styles.action}>
          <Feather name='lock' color='#05375a' size={20}/>

          {
            secureTextEntry
            ? <TextInput
              secureTextEntry={secureTextEntry}
              placeholder="Your password..."
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.textInput}
            />
            : <TextInput
              
              placeholder="Your password..."
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.textInput}
            />
          }
          
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}
          >
          {
            secureTextEntry
            ? <Feather name="eye-off" color="gray" size={20} />
            : <Feather name="eye" color="green" size={20} />
          }
            
          </TouchableOpacity>
        </View>

        <Text style={{color: '#009bd1', marginTop: 15}}>Forgot Password?</Text>
        <View style={styles.button}>
        <TouchableOpacity style={styles.signIn}
          onPress={() => {}}
        >
          <LinearGradient
            colors={['#5db8fe', '#39cff2']}
            style={styles.signIn}
          >
            <Text style={[styles.textSign, {color: 'white'}]}>Sign In</Text>
          </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpComponent')}
            style={[styles.signIn, {
              borderColor: '#4dc2f8',
              borderWidth: 1,
              marginTop: 15
            }]}
          >
            <Text style={[styles.textSign, {color: '#4dc2f8'}]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05375a'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 3,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#727272',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a'
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
