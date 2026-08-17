import { StyleSheet, Text, View, FlatList, ActivityIndicator  } from 'react-native';
import Posteos from './Posteos';
import Stories from './Stories';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';


export default function Feed({data}) {
    const router = useRouter();


     const [datapost, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
fetch('https://dummyjson.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setData(json.posts);
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
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        <Stories  user={item} ></Stories>
        )}></FlatList>

            <FlatList
        datapost={datapost}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
       
                 <Posteos
                 post={item} id={item.id}
    user={data.find(user => user.id === item.userId)}
          onPress={() => abrirPost(item.id)}
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
