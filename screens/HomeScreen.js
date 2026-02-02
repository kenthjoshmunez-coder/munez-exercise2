import { Button, Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 28 }}>Quiz App</Text>
      <Button title="Start Quiz" onPress={() => navigation.navigate("Quiz")} />
    </View>
  );
}
