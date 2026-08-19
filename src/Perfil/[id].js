
import { StyleSheet, Text, View } from 'react-native';
import {
  Menu, User
} from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator
} from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Perfil() {

    const { id } = useLocalSearchParams();
    const [data, setUser] = useState(null);

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);



  useEffect(() => {

        const cargarDatos = async () => {

            try {

                // Obtener el post según el ID de la ruta
                const responseUser = await fetch(
                    `https://dummyjson.com/users/${id}`
                );

                const userData = await responseUser.json();

                setPost(userData);


           

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }
        };

        cargarDatos();

    }, [id]);



    useEffect(() => {

        const cargarDatos = async () => {

            try {

                // Obtener el post según el ID de la ruta
                const responsePost = await fetch(
                    `https://dummyjson.com/posts/${id}`
                );

                const postData = await responsePost.json();

                setPost(postData);


           

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


    if (!post || !data) {
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
  source={{ uri: data.image }}
  style={{
    width: 50,
    height: 50,
    borderRadius: 25,
  }}
/>



                      <Text>post</Text>
                      <Text>followers</Text>
                      <Text>following</Text>



                <Text>
                    {data.firstName} {data.lastName}
                </Text>
                 <Text>
                {post.body}
            </Text>

            </View>

                    <Menu></Menu>
                    <User></User>

            <Image
                source={{
                    uri: `https://picsum.photos/id/${post.id + 10}/500/500`
                }}
                style={{
                    width: "100%",
                    height: 400
                }}
            />


                      
      

            

            

           
        </View>
    );
}
