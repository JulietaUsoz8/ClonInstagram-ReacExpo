
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
House, Search, Users, Bookmark, circlePlus
} from "lucide-react";
import Perfil from './Perfil';
 const Menu =() =>{
        const router = useRouter();

 const abrirPost = (id) => {
    router.push(`./src/Perfil`);
  };
return(
    <View style={styles.header}>
 <House></House>
 <Search></Search>
 <circlePlus></circlePlus>   
 <Bookmark></Bookmark>   
 <Users>
    <Perfil>         onPress={() => abrirPost(post.id)}</Perfil>
    </Users>  
    </View>


)
 }

const styles = StyleSheet.create({
 
});


export default Header;