import { View, Text, StyleSheet } from 'react-native';
import {basicMenu} from './basicMenu';


function Menu() {
  return (
    <View style={style.Page} >
        {/*هذي تمشي على الاريي الاساسيه وتدخل كل اوبجيت*/}
      {basicMenu.map((menu, index) => (
        <View key={index}>
            {/* هنا نطلع اسم الاوبجيت ونطبعه */}
          {Object.keys(menu).map((key) => (
            <View key={key} style={style.Type}>
              <Text style={style.boldText}>{key}</Text>
              {/*هنا نطبع كل عناصر الاوبجيت   */}
              {menu[key]?.map((item, i) => (
                <Text key={i} style={style.normalText}>
                  {item.name} - ${item.price}
                </Text>
              ))}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
 
const style = StyleSheet.create({
    Page:{
        width:'100%',
        flexShrink:1,
        backgroundColor:'#FFF5D7',
        padding:20,
        gap:20,
        flexDirection:'row',
        flexWrap:'wrap',
    }, 
    Type:{
        padding:10,
        gap:2,
    },
    boldText: {
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    normalText:{
        fontSize: 14,
        fontWeight: 'normal',
    }
})






export default Menu;