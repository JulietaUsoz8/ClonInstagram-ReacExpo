import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Header from './src/Header';
import Menu from './src/Menu';
import Feed from './src/Feed';
import { useState, useEffect } from 'react';

const Stack = createStackNavigator();


export default function App() {

   const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((json) => {
        setData(json.users);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }



  return (
    <View style={styles.container}>
       
       <Header ></Header>
        <Feed data={data}></Feed>
        <Menu data={data}></Menu>

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
