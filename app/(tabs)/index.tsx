import {Button, Text, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={{flex:0.10,backgroundColor:'#E195AB',padding:20, flexDirection:'row',alignItems:'center' }} >
        <Image source={{
        uri: "https://inbloombakery.com/wp-content/uploads/2021/05/Chocolate-Berry-Cake-2-1.jpg" }}
        style={{ width: 50, height: 50 }} />
         <ThemedText style={{fontSize: 40, fontWeight: 'bold'}}>Sweets Sweet</ThemedText>
        <Button title="C" /*style={{width:60,height:60,margin:25}} *//>
      </ThemedView>
      <ScrollView style={{flex:0.90}}>
        {/* Menu */}
          <ThemedView style={{width:'100%',height:1000,backgroundColor:'#FFF5D7'}}>
           
          </ThemedView>
        {/* Design Your Cake */}
          <ThemedView style={{width:'100%',height:500,backgroundColor:'#ffedf5'}}>
             <Button title="Start" onPress={()=>{}} /*style={{width:100,height:50,marginTop:350,alignSelf:'center'}} */ /> 
          </ThemedView>
        {/* Socail media and another things */}
        <ThemedView style={{width:'100%',height:250,backgroundColor:'#E195AB'}}>

        </ThemedView>

      </ScrollView>
    </ThemedView>
  );
}