import { View, Text, StyleSheet } from 'react-native';

type prups = {
    name: string
};

function About({ name }: prups ) {
    return(
        <View style={styles.page}> 
        <Text style={styles.title}> {name} </Text>
        we are a Cake Store that provides the best cakes in town, we have a wide variety of cakes to choose from, and we also provide custom cakes for special occasions.
        Our cakes are made with the finest ingredients and are baked to perfection. We also provide delivery services for our customers.
        We are committed to providing the best customer service and ensuring that our customers are satisfied with their orders. Thank you for choosing our Cake Store!
        </View>
)
}
const styles = StyleSheet.create({
    page: {
        width: '100%',
        flexShrink: 1,
        backgroundColor: '#ffedf5',
        fontSize: 22,
        padding: 15,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    }
}
)
export default About;