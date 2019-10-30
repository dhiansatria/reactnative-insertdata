import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//import file pada folder pegawai (lain)

import PegawaiMain from './pegawai/PegawaiMain'; //pegawai main yg biru adalah class yang from adalah nama file
import PegawaiRead from './pegawai/PegawaiRead';
import PegawaiEdit from './pegawai/PegawaiEdit';

const RootStack = createStackNavigator(
  {
    PegawaiMain: {
      //nama props
      screen: PegawaiMain,
      navigationOptions: {},
    },
    // PegawaiEdit: {
    //   screen: PegawaiEdit,
    //   navigationOptions: {
    //   }
    // },
    // PegawaiRead: {
    //   screen: PegawaiRead,
    //   navigationOptions: {
    //   }
    // },
  },
  {
    initialRouteName: 'PegawaiMain', //sebagai root , yang pertama kali dibuka
  },
);

const AppContainer = createAppContainer(RootStack);
// export default class App extends Container {
//   render() {
//     return <Container/>
//   }
// }

export default AppContainer;
