/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native';

const consoleLog = n => console.log('****** SignInComponent.js -- line: ' + n + ' ******');

// khai báo props
SignInComponent.propTypes = {
  //   todos: PropTypes.array,
  //   onTodoClick: PropTypes.function,
};

// Khởi tạo giá trị default cho props khi không nhận được
// từ parent
SignInComponent.defaultProps = {
  //   todos: [],
  //   onTodoClick: null,
};

export default function SignInComponent() {
  return (
    <View style={styles.container}>
      <Text>SignIn Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
