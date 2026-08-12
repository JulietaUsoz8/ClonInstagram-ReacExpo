import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './DetallePosteo';
import Perfil from './Posteos';
import Perfil from './Stories';

const Stack = createStackNavigator();


export default function Feed({data}) {

     const [datauser, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
fetch('')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>

       <Stack.Screen name="Perfil" component={Perfil}data={data} datauser={datauser}></Stack.Screen>



  <FlatList
        data={DATA}
        keyExtractor={(post) => post.id}
        renderItem={({ post }) => (
        <Stack.Screen name="Stories" component={Stories} post={post} ></Stack.Screen>
        )}></FlatList>

            <FlatList
        data={DATA}
        keyExtractor={(post) => post.id}
        renderItem={({ post }) => (
            <Stack.Screen name="Posteos" component={Posteos}post={post} id={post.id}></Stack.Screen>
        )}></FlatList>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
