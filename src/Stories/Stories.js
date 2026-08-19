
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';




export default function Stories({user}) {

  return (
    
    <View style={styles.container}>
      <View style={styles.storyBorder}>

          <Image
            source={{ uri: user.image }}
            style={styles.image}
          />
          <Text     style={styles.username}
        numberOfLines={1}>{user.firstName}.{user.lastName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 72,
    alignItems: 'center',
    marginRight: 8,
  },

  storyBorder: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 2,
    borderColor: '#E1306C',
    padding: 2,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },

  username: {
    marginTop: 5,
    fontSize: 11,
    color: '#262626',
    maxWidth: 68,
  },
});
