import { Button, StatusBar, Text, View, ActivityIndicator, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import NavTop from '@/components/NavTop';
import Menu from '@/app/Menu';
import About from '@/app/about';
import InstaLogo from '@/components/instaLogo';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar barStyle={'default'}/>   */}
      <NavTop name="Sweet Sweet" />
      <ScrollView style={{ flex: 0.90 }}>
        <About name="Sweet Sweet" />
        {/* Menu */}
        <Menu />
        {/* Design Your Cake */}
        <View style={{ width: styles.page.width, height: 500, backgroundColor: colors.pink, justifyContent: 'center', gap: 40, padding: 40 }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>Order</Text>
          <Text onPress={() => router.push('/order')} style={styles.Button} >Start</Text>
        </View>
        {/* social media and another things */}
        <View style={{ width: styles.page.width, height: 100, backgroundColor: colors.darkPink, justifyContent: 'center', alignItems: 'flex-start', padding: 20, gap: 20 }}>
          <InstaLogo width="30" height="30" />
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  page: {
    width: '100%',
  },
  Button: {
    width: '50%',
    height: 50,
    backgroundColor: '#E195AB',
    textAlign: 'center',
    alignContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  }

});

const colors = {
  yellow: '#FFF5D7',
  pink: '#ffedf5',
  darkPink: '#E195AB',
}