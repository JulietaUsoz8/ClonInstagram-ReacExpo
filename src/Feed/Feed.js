import { StyleSheet, Text, View, FlatList, ActivityIndicator  } from 'react-native';
import Posteos from '../Posteos/Posteos';
import Stories from '../Stories/Stories';
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
    <View style={styles.storiescontainer}>
        <FlatList
          data={data}
           horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
          <Stories  user={item} ></Stories>
          )}/>

          </View>

  
     

      <FlatList
        data={datapost}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {

          const user = data.find(
            user => user.id === item.userId
          );

          return (
            <Posteos
              post={item}
              id={item.id}
              user={user}
              onPress={() => abrirPost(item.id)}
            />
          );
        }}
      />

    </View>



  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  storiesContainer: {
    height: 100,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
  },

  storiesList: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
