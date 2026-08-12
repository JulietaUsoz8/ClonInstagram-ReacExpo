import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {
  Heart, Send,
messageCircle
} from "lucide-react";

const Stack = createStackNavigator();


export default function Posteos({post, id}) {

  return (
    <View style={styles.container}>
 <Text>{post.firstName}{post.lastName}</Text>
    <Image
  source={{ uri: post.image }}
  style={{ width: 50, height: 50 }}
/>
<Heart></Heart>
<Send></Send>
<messageCircle></messageCircle>
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
