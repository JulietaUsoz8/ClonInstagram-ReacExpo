import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, FlatList } from 'react-native';


const Stack = createStackNavigator();


export default function Stories({post}) {

  return (
    
    <View style={styles.container}>
          <Image
  source={{ uri: post.image }}
  style={{ width: 50, height: 50 }}
/>
 <Text>{post.firstName}.{post.lastName}</Text>
  
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
