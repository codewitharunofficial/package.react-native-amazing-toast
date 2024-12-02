import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useToast } from 'react-native-amazing-toast';

export default function TabTwoScreen() {

  const { showToast } = useToast();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Button title='Success' onPress={() => showToast({ message: "Screen 2 is a success", type: 'success', duration: 2000, backgroundColor: 'black', icon: '../../assets/images/icon.png', textColor: '#fff' })} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
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
