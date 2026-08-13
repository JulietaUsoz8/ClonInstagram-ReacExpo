import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Posteos from './Posteos';
import Stories from './Stories';
import useRouter from "expo-router"
//IMPORTAR ROUTER, usestate
const Stack = createStackNavigator();


export default function Feed({data}) {
    const router = useRouter();


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
  const abrirPost = (id) => {
    router.push(`/Post/${id}`);
  };
    if (loading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  
  return (
    <View style={styles.container}>




  <FlatList
        data={data}
        keyExtractor={(post) => post.id}
        renderItem={({ post }) => (
        <Stack.Screen name="Stories" component={Stories} post={post} ></Stack.Screen>
        )}></FlatList>

            <FlatList
        data={data}
        keyExtractor={(post) => post.id}
        renderItem={({ post }) => (
       
                 <Posteos
                 post={post} id={post.id}
       
          onPress={() => abrirPost(post.id)}
        />
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
