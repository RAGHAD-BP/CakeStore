import {Button, StatusBar, Text, View, ActivityIndicator, StyleSheet, Pressable, ScrollView} from 'react-native';
import { Image } from 'expo-image';
import { useState } from 'react';
import NavTop from '@/components/NavTop';
import Menu from '@/app/Menu';
import About from '@/app/about';

export default function App() {
  const[ isLoading, setIsLoading] = useState(true)
  return (
    <View style={{ flex: 1 }}>
        {/* <StatusBar barStyle={'default'}/>   */}
        <NavTop name="Sweet Sweet" />
      <ScrollView style={{flex:0.90}}>
        <About name="Sweet Sweet" />
        {/* Menu */}
        <Menu />
        {/* Design Your Cake */}
          <View style={{width:styles.page.width,height:500,backgroundColor:colors.pink, justifyContent:'center', gap:40, padding:40  }}>
            <Text style={{fontSize:40, fontWeight:'bold',textAlign:'center' }}>Order</Text>
             <Text  onPress={()=> setIsLoading(!isLoading)}  style={styles.Button} >Start</Text> 
              { <ActivityIndicator style={{ alignItems:'center'}} size="large" color={colors.darkPink}  animating={isLoading} />  }
          </View>
        {/* social media and another things */}
        <View style={{width:styles.page.width,height:250,backgroundColor:colors.darkPink}}>

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
    backgroundColor:'#E195AB',
    textAlign:'center',
    alignContent:'center',
    borderRadius: 10,
    alignSelf:'center',
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