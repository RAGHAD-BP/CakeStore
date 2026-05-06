import {Button} from 'react-native';
import { ThemedView } from './themed-view';
import { ThemedText } from '@/components/themed-text';
import { Image } from 'expo-image';

type prups = {
    name: string
};
function NavTop({name}: prups) {
  return (
    <ThemedView style={{flex:0.10,backgroundColor:'#E195AB',padding:20, flexDirection:'row',alignItems:'center' }} >
        <Image source={{
        uri: "https://inbloombakery.com/wp-content/uploads/2021/05/Chocolate-Berry-Cake-2-1.jpg" }}
        style={{ width: 50, height: 50 }} />
         <ThemedText style={{fontSize: 40, fontWeight: 'bold', paddingRight: 25}}>{name}</ThemedText>
        <Button title="C" color={'#7e6c38'} /*style={{width:60,height:60,margin:25}} *//>
        {/* بعدل بعدين لون البوتن بس عشان يوضح اللحين */}
      </ThemedView>
  )
}

export default NavTop;