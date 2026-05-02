import {Text, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';


export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor:'#fbf1f7' }}>
      <View style={{justifyContent:'flex-start',backgroundColor:'#e0acc8', width: '100%',height:'10%' }} >
        <ThemedText style={{fontSize: 40, fontWeight: 'bold',padding:20}}>Cake Store</ThemedText>
  
      </View>
  </View>
  );
}