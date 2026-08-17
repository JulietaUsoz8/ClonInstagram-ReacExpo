
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from 'expo-router';
import { CirclePlus } from 'lucide-react-native';
import {
House, Search, Users, Bookmark
} from "lucide-react";
import Perfil from './Perfil';


 const Menu =({data}) =>{

   let id = data[0].id;
const router = useRouter();

 const abrirPost = (id) => {
    router.push(`/Perfil/${id}`);
  };
return(
    <View style={styles.header}>
 <House></House>
 <Search></Search>
 <CirclePlus></CirclePlus>   
 <Bookmark></Bookmark>   
<Pressable onPress={() => abrirPerfil(data[0].id)}>
    <Users />
</Pressable>
    </View>


)
 }

const styles = StyleSheet.create({
 
});


export default Menu;