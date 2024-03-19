import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Rebecca from './SRC/componets/Rebecca/index';
import Pedro from './SRC/componets/Pedro/main';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
    
      
      <Pedro></Pedro>
      <Rebecca></Rebecca>
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
});
