
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import useRouter from 'expo-router'

import {
House, Search, Users, Bookmark
} from "lucide-react";
import Perfil from './Perfil';


 const Menu =({data}) =>{

   id = data.id[0];
const router = useRouter();

 const abrirPost = (id) => {
    router.push(`./src/Perfil/${id}`);
  };
return(
    <View style={styles.header}>
 <House></House>
 <Search></Search>
 <circlePlus></circlePlus>   
 <Bookmark></Bookmark>   
 <Users>
    <Perfil    data ={data[0]}     onPress={() => abrirPost(id)}></Perfil>
    </Users>  
    </View>


)
 }

const styles = StyleSheet.create({
 
});


export default Header;