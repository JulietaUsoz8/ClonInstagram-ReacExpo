import { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import {
  Heart, Send,
MessageCircle, HeartOff
} from "lucide-react-native";

export default function Post() {

    const { id } = useLocalSearchParams();

    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [liked, setLiked] = useState(false);
    const setLike = () => {
    setLiked(!liked);
};
    
    useEffect(() => {

        const cargarDatos = async () => {

            try {

                // Obtener el post según el ID de la ruta
                const responsePost = await fetch(
                    `https://dummyjson.com/posts/${id}`
                );

                const postData = await responsePost.json();

                setPost(postData);


                // Obtener el usuario que creó el post
                const responseUser = await fetch(
                    `https://dummyjson.com/users/${postData.userId}`
                );

                const userData = await responseUser.json();

                setUser(userData);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }
        };

        cargarDatos();

    }, [id]);


    if (loading) {
        return (
            <View>
                <ActivityIndicator size="large" />
                <Text>Cargando...</Text>
            </View>
        );
    }


    if (!post || !user) {
        return (
            <View>
                <Text>No se encontró el post.</Text>
            </View>
        );
    }


    return (
        <View>
            <View>
       <Image
    source={{ uri: user.image }}
    style={{
        width: 50,
        height: 50,
        borderRadius: 25
    }}
/>

                <Text>
                    {user.firstName} {user.lastName}
                </Text>
            </View>


     
<Image
    source={{ uri: user.image }}
    style={{
        width: 50,
        height: 50,
        borderRadius: 25
    }}
/>

  <Pressable onPress={() => setLiked(!liked)}>
    <Heart
        fill={liked ? "black" : "none"}
    />
</Pressable>
            <Send></Send>
            <MessageCircle></MessageCircle>

           

            <Text>
                {post.title}
            </Text>


            

            <Text>
                {post.body}
            </Text>

        </View>
    );
}