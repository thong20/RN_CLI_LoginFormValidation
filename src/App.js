
// link: UI: https://youtu.be/vOPf0QL2mWs
// link: form validation: https://youtu.be/uxawinQ2tTk
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import RootStack from './RootStack'

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({

});

export default App;
