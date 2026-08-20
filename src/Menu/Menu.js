
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from 'expo-router';
import { CirclePlus } from 'lucide-react-native';
import {
House, Search, Users, Bookmark
} from "lucide-react-native";


import { useNavigation } from "@react-navigation/native";


 const Menu =({data}) =>{
const navigation = useNavigation();
   
//const router = useRouter();
const abrirPerfil = (id) => {
navigation.navigate("Perfil", {
   id: id,
  });
};
 //const abrirPerfil = (id) => {
  // router.push(`/Perfil/${id}`);
  //};
return(
  <View style={styles.menu}>

      <Pressable>
        <House
          size={25}
          color="#262626"
          strokeWidth={1.8}
        />
      </Pressable>

      <Pressable>
        <Search
          size={25}
          color="#262626"
          strokeWidth={1.8}
        />
      </Pressable>

      <Pressable>
        <CirclePlus
          size={25}
          color="#262626"
          strokeWidth={1.8}
        />
      </Pressable>

      <Pressable>
        <Bookmark
          size={25}
          color="#262626"
          strokeWidth={1.8}
        />
      </Pressable>

      <Pressable
        onPress={() => abrirPerfil(9)}
      >
        <Users
          size={25}
          color="#262626"
          strokeWidth={1.8}
        />
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({

  menu: {
    height: 58,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderTopColor: '#DBDBDB',
    paddingHorizontal: 5,
  },

});

export default Menu;