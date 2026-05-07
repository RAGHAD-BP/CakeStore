import {Button, StatusBar, Text, View, ActivityIndicator, StyleSheet, Pressable, ScrollView} from 'react-native';
import { Image } from 'expo-image';
import { useState } from 'react';
import NavTop from '@/components/NavTop';

export default function App() {
  const[isLoading, setIsLoading] = useState(true)
  return (
    <View style={{ flex: 1 }}>
        {/* <StatusBar barStyle={'default'}/>   */}
        <NavTop name="Sweet Sweet" />
      <ScrollView style={{flex:0.90}}>
        {/* Menu */}
          <View style={{width:styles.page.width,height:1000,backgroundColor:styles.colors.yellow}}>
        
          </View>
        {/* Design Your Cake */}
          <View style={{width:styles.page.width,height:500,backgroundColor:styles.colors.pink}}>
             <Button title="Start" onPress={()=> setIsLoading(!isLoading)} color={styles.colors.darkPink}  /> 
              <ActivityIndicator style={{flex:1, justifyContent:'center', alignItems:'center'}} size="large" color={styles.colors.darkPink} animating={isLoading} />    
          </View>
        {/* social media and another things */}
        <View style={{width:styles.page.width,height:250,backgroundColor:styles.colors.darkPink}}>

        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
   page: {
    width: '100%',
  },
   colors: {
    yellow: '#FFF5D7',
    pink: '#ffedf5',
    darkPink: '#E195AB',
  },
});