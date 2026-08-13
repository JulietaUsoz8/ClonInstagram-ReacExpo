import { View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function PostDetail() {

  const { id } = useLocalSearchParams();

  return (
    <View>

      <Text>Post seleccionado: {id}</Text>

    </View>
  );
}