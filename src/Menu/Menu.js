
import { Pressable, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from 'expo-router';
import { CirclePlus } from 'lucide-react-native';
import {
House, Search, Users, Bookmark
} from "lucide-react-native";



 const Menu =({data}) =>{

   let id = data[0].id;
const router = useRouter();

 const abrirPerfil = (id) => {
    router.push(`/Perfil/${id}`);
  };
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
        onPress={() => abrirPerfil(data[0].id)}
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