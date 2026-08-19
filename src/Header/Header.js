
import { StyleSheet, Text, View, Image, } from "react-native";
import { StatusBar,  } from "expo-status-bar";
import {
  Camera, ChevronRight
} from "lucide-react-native";
const Header = () => {

  return (
    <View style={styles.header}>
      <StatusBar style="dark" />
      <Camera
        size={25}
        color="#262626"
        strokeWidth={1.8}
      />
      <Image
        source={require("../../assets/Instagram-Logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <ChevronRight
        size={25}
        color="#262626"
      />
    </View>


  )
}

const styles = StyleSheet.create({

  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
  },

  logo: {
    width: 105,
    height: 35,
  },

});
export default Header;