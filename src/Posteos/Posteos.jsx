import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native';
import {
  Heart, Send,
messageCircle, HeartOff
} from "lucide-react-native";

const Stack = createStackNavigator();


export default function Posteos({ post, user, id, onPress }) {
  return (
    <Pressable onPress={onPress}>
   <Image
    source={{ uri: user.image }}
    style={{
        width: 50,
        height: 50,
        borderRadius: 25
    }}
/>
 <Text>{user.firstName}.{user.lastName}</Text>
<Image
    source={{ uri: user.image }}
    style={{
        width: 50,
        height: 50,
        borderRadius: 25
    }}
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
