
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
 Camera, ChevronRight 
} from "lucide-react";
 const Header =() =>{

return(
    <View style={styles.header}>
      <StatusBar style="light" />
      <Camera></Camera>
     <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <ChevronRight></ChevronRight>
    </View>


)
 }

const styles = StyleSheet.create({
 
});


export default Header;