import {StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Pedro from './SRC/componets/Pedro/main';
import Rebecca from './SRC/componets/Rebecca';

export default function App() {
  return (
    <View style={StyleSheet.container}>
      <Pedro/>
      <Rebecca/>
      <StatusBar style="auto"/>
    </View>
  )
}