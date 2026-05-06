import {Button, StatusBar, Text, View ,ActivityIndicator} from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { ScrollView } from 'react-native';
import { Pressable } from 'react-native';
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
          <ThemedView style={{width:'100%',height:1000,backgroundColor:'#FFF5D7'}}>
        
          </ThemedView>
        {/* Design Your Cake */}
          <ThemedView style={{width:'100%',height:500,backgroundColor:'#ffedf5'}}>
             <Button title="Start" onPress={()=> setIsLoading(!isLoading)} color="#E195AB"  /> 
              <ActivityIndicator style={{flex:1, justifyContent:'center', alignItems:'center'}} size="large" color="#E195AB" animating={isLoading} />    
          </ThemedView>
        {/* social media and another things */}
        <ThemedView style={{width:'100%',height:250,backgroundColor:'#E195AB'}}>

        </ThemedView>

      </ScrollView>
    </View>
  );
}