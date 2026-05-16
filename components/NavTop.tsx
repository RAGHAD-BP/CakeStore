import { View, Text, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { useState, useEffect } from 'react';

type prups = {
  name: string
};
function NavTop({ name }: prups) {
  const [isTrue, setIsTrue] = useState(true);

  // ابغى اخليها لتغيير اللوغه مع تغيير شكل السويتش 
  useEffect(() => {
    console.log(isTrue)
  }, [isTrue]);

  return (
    <SafeAreaView style={{ flex: 0.10, backgroundColor: '#E195AB', padding: 20, flexDirection: 'row', alignItems: 'center' }} >
      <Image source={{
        uri: "https://inbloombakery.com/wp-content/uploads/2021/05/Chocolate-Berry-Cake-2-1.jpg"
      }}
        style={{ width: 50, height: 50 }} />
      <Text style={{ fontSize: 40, fontWeight: 'bold', paddingRight: 25 }}>{name}</Text>
      {/* مشكله باللون  */}
      <Switch value={isTrue} onValueChange={setIsTrue} trackColor={{ true: "red", false: "black" }} thumbColor={isTrue ? "red" : "black"}
      />
    </SafeAreaView>
  )
}

export default NavTop;