import { Button, StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useToast } from "react-native-amazing-toast";

export default function TabOneScreen() {

  const { showToast } = useToast();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Button title='Success' onPress={() => showToast({ message: 'Test Successful', type: 'success', duration: 3000, backgroundColor: 'lightblue', position: 'bottom', icon: require('@/assets/images/icon.png') })} />
      <Button title='Warning' onPress={() => showToast({ message: 'Warning!!', type: 'warning', duration: 3000, backgroundColor: 'white', position: 'bottom', icon: '../../assets/images/icon.png' })} /><Button title='Error' onPress={() => showToast({ message: 'An Error Occurred', type: 'error', duration: 3000, backgroundColor: 'white', position: 'bottom', icon: '../../assets/images/icon.png' })} /><Button title='Info' onPress={() => showToast({ message: 'Info Are Here', type: 'info', duration: 500, position: 'bottom', icon: require('@/assets/images/icon.png') })} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
