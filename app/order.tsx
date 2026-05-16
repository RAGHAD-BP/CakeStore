import { View, Text, StyleSheet, Image ,TextInput } from 'react-native';
import { useState } from 'react';

function Order() {
    const [address, setAddress] = useState("");
    const [errors,setErrors] =useState({});
    const validateForm =()=>{
        let errors: {[Key: string]: string}={};
        if (!address){
            errors.address = "Address Url is required"
        }
    }

    return (
        <View style={style.Page}>
            <Text style={style.title}>Order Page</Text>
            <View style={style.type}>Type of cake:
                <Image style={style.Value} source={{
                    uri: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3MiA3MiI+Cgk8cGF0aCBkPSJNMCAwaDcydjcySDB6IiBmaWxsPSJub25lIiAvPgoJPHBhdGggZmlsbD0iIzdhNjQ0OSIgZD0iTTUgMTdoNjJ2MzhINXoiIC8+Cgk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIwIiBkPSJNNSAxN2g2MnYzOEg1eiIgLz4KPC9zdmc+Cg=="
                }}
                />
                <View style={style.Value}>Vanilla</View>
                <View style={style.Value}>Red Velvet</View>
                <View style={style.Value}>Strawberry</View>
            </View>
            <View style={style.type}>Size of cake</View>
            <View style={style.type}>Flavor of cake</View>
            <Text style={style.type}>Address:</Text>
            <TextInput placeholder="url address" style={style.TextInput} value={address} onChangeText={setAddress}/>
            <Text style={style.sendButton}>Send</Text>
        </View>
    );
}
const style = StyleSheet.create({
    Page: {
        width: '100%',
        padding: 5,
        gap: 20,
        backgroundColor: '#ffedf5',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    sendButton: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#E195AB',
        padding: 10,
        borderRadius: 5,
    },
    type: {
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold',
        flexDirection: 'row',
        gap: 10,
        flexWrap: 'wrap',
        fontFamily: "Aline"
    },
    Value: {
        backgroundColor: '#E195AB',
        borderRadius: 5,
        color: 'white',
        width: 80,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    TextInput:{
        fontSize:15,
        outlineColor:'#9d8d97',
        borderRadius:10,
        alignItems:"center",
        justifyContent:'center',
        padding:10,
    }

});

export default Order;
