import { View, Text } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Image } from 'expo-image';

type prups = {
    name: string
};
function NavTop({name}: prups) {
  return (
    <SafeAreaView style={{flex:0.10,backgroundColor:'#E195AB',padding:20, flexDirection:'row',alignItems:'center' }} >
        <Image source={{
        uri: "https://inbloombakery.com/wp-content/uploads/2021/05/Chocolate-Berry-Cake-2-1.jpg" }}
        style={{ width: 50, height: 50 }} />
         <Text style={{fontSize: 40, fontWeight: 'bold', paddingRight: 25}}>{name}</Text>
        <Text style={{width:60,height:60,backgroundColor:'#b7b7b7',color:'white',textAlign:'center',alignContent:'center'}}>Langu</Text>
      </SafeAreaView>
  )
} 

export default NavTop;