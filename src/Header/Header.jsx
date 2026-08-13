
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
 camera, chevronRight 
} from "lucide-react";
 const Header =() =>{

return(
    <View style={styles.header}>
      <StatusBar style="light" />
      <camera></camera>
     <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <chevronRight></chevronRight>
    </View>


)
 }

const styles = StyleSheet.create({
 
});


export default Header;