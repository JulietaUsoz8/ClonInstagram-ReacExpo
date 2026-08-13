import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {
  Heart, Send,
messageCircle, HeartOff
} from "lucide-react";

const Stack = createStackNavigator();


export default function Posteos({post, id}) {

  return (
    <Pressable onPress={onPress}>
       <Image
  source={{ uri: post.image }}
  style={{ width: 50, height: 50 }}
/>
 <Text>{post.firstName}.{post.lastName}</Text>
    <Image
  source={{ uri: post.image }}
  style={{ width: 50, height: 50 }}
/>
<Heart>
           onPress={() => abrirPost(<HeartOff></HeartOff>)}
</Heart>
<Send></Send>
<messageCircle></messageCircle>
    </Pressable>
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
