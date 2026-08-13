import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import Menu from './src/Menu';
import Feed from './src/Feed';

const Stack = createStackNavigator();


export default function App() {

   const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
fetch('https://dummyjson.com/users')
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

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }



  return (
    <View style={styles.container}>
       
       <Stack.Screen name="Header" component={Header} ></Stack.Screen>
        <Stack.Screen name="Feed" component={Feed}data={data}></Stack.Screen>
        <Stack.Screen name="Menu" component={Menu}data={data}></Stack.Screen>

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
