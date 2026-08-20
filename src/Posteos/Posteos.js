import { StyleSheet, Text, View, FlatList, Pressable, Image,  } from 'react-native';
import {
  Heart, Send,
MessageCircle, HeartOff
} from "lucide-react-native";

export default function Posteos({ post, user, id, onPress }) {
 
     const setLike = () => {
    setLiked(!liked);
};
  return (
    <View style={styles.post}>

      <View style={styles.postHeader}>

        <View style={styles.userInfo}>
          <Image
            source={{ uri: user?.image }}
            style={styles.profileImage}
          />

          <Text style={styles.username}>
            {user?.firstName}.{user?.lastName}
          </Text>
        </View>

       

      </View>

   
      <Pressable onPress={onPress}>
        <Image
          source={{ uri: post.image }}
          style={styles.postImage}
        />
      </Pressable>

      {/* ICONOS */}
      <View style={styles.actions}>

        <View style={styles.leftActions}>

          <Pressable>
            <Heart
              size={26}
              color="#262626"
              strokeWidth={1.8}
            />
          </Pressable>

          <Pressable>
            <MessageCircle
              size={26}
              color="#262626"
              strokeWidth={1.8}
            />
          </Pressable>

          <Pressable>
            <Send
              size={26}
              color="#262626"
              strokeWidth={1.8}
            />
          </Pressable>

        </View>

        <Pressable>
          <Text style={styles.bookmark}>♡</Text>
        </Pressable>

      </View>

      {/* LIKES */}
      <Text style={styles.likes}>
        {post.reactions?.likes ?? 0} likes
      </Text>

      {/* DESCRIPCIÓN */}
      <Text style={styles.description}>
        <Text style={styles.bold}>
          {user?.firstName}.{user?.lastName}
        </Text>{' '}
        {post.body}
      </Text>

      {/* COMENTARIOS */}
      <Text style={styles.comments}>
        View all comments
      </Text>

    </View>
  );
}
const styles = StyleSheet.create({

  post: {
    backgroundColor: '#fff',
    marginBottom: 18,
  },

  postHeader: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileImage: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginRight: 10,
  },

  username: {
    fontSize: 13,
    fontWeight: '600',
    color: '#262626',
  },

  postImage: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 9,
  },

  leftActions: {
    flexDirection: 'row',
    gap: 17,
  },

  bookmark: {
    fontSize: 27,
    color: '#262626',
  },

  likes: {
    fontSize: 13,
    fontWeight: '700',
    marginHorizontal: 12,
    marginTop: 7,
  },

  description: {
    fontSize: 13,
    color: '#262626',
    marginHorizontal: 12,
    marginTop: 5,
    lineHeight: 18,
  },

  bold: {
    fontWeight: '700',
  },

  comments: {
    color: '#8E8E8E',
    fontSize: 13,
    marginHorizontal: 12,
    marginTop: 5,
  },
});
