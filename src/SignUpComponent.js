/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable';

const consoleLog = n => console.log('****** SignUpComponent.js -- line: ' + n + ' ******');

SignUpComponent.propTypes = {

};

SignUpComponent.defaultProps = {

};

export default function SignUpComponent(props) {
  const {navigation} = props

  const [check_textInputChange, setCheck_textInputChange] = useState(false)
  const [password, setPassword] = useState('')
  const [password_confirm, setPassword_confirm] = useState('')
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [secureTextEntry_confirm, setSecureTextEntry_confirm] = useState(true)

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

        {/* EMAIL ================================ */}
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

        {/* PASSWORD ================================ */}
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

        {/* COMFIRM PASSWORD ================================ */}
        <Text style={[styles.text_footer, {marginTop: 35}]}>Confirm Password:</Text>
        <View style={styles.action}>
          <Feather name='lock' color='#05375a' size={20}/>

          {
            secureTextEntry
            ? <TextInput
              secureTextEntry={secureTextEntry_confirm}
              placeholder="Confirm password..."
              value={password_confirm}
              onChangeText={(text) => setPassword_confirm(text)}
              style={styles.textInput}
            />
            : <TextInput
              placeholder="Confirm password..."
              value={password_confirm}
              onChangeText={(text) => setPassword_confirm(text)}
              style={styles.textInput}
            />
          }
          
          <TouchableOpacity
            onPress={() => setSecureTextEntry_confirm(!secureTextEntry_confirm)}
          >
            {
              secureTextEntry_confirm
              ? <Feather name="eye-off" color="gray" size={20} />
              : <Feather name="eye" color="green" size={20} />
            }
          </TouchableOpacity>
        </View>

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>By signing up you agree to our </Text>
          <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>Term of Service </Text>
          <Text style={styles.color_textPrivate}>and </Text>
          <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>Privacy Policy</Text>
        </View>

        {/* BUTTON ================================ */}
        <View style={styles.button}>
          <LinearGradient
            colors={['#5db8fe', '#39cff2']}
            style={styles.signIn}
          >
            <Text style={[styles.textSign, {color: 'white'}]}>Register</Text>
          </LinearGradient>
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
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate:{
    color: 'gray'
  }
});
