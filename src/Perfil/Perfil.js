import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, FlatList } from 'react-native';


const Stack = createStackNavigator();


export default function Posteos({data, datauser}) {
perfil = data[0]
detalleP = datauser[0]
  return (
    <View style={styles.container}>

    <Image
  source={{ uri: post.image }}
  style={{ width: 50, height: 50 }}
/>
 <Text>{post.firstName}{post.lastName}</Text>
<Text>{detalleP.views}</Text>
    </View>
  );
}
//AGREGAR LIKES E ICONOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
