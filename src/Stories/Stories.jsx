
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';




export default function Stories({user}) {

  return (
    
    <View style={styles.container}>
          <Image
  source={{ uri: user.image }}
  style={{ width: 50, height: 50 }}
/>
 <Text>{user.firstName}.{user.lastName}</Text>
  
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
