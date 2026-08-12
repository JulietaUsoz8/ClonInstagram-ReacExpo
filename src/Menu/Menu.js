
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
House, Search, Users, Bookmark, circlePlus
} from "lucide-react";
 const Menu =() =>{

return(
    <View style={styles.header}>
 <House></House>
 <Search></Search>
 <circlePlus></circlePlus>   
 <Bookmark></Bookmark>   
 <Users></Users>  
    </View>


)
 }

const styles = StyleSheet.create({
 
});


export default Header;