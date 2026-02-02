import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { questions } from "../questions";

export default function Result({ route, navigation }) {
  const { answers } = route.params;
  const [highScore, setHighScore] = useState(0);

  let score = 0;
  questions.forEach((q) => {
    if (answers[q.id] === q.correctAnswer) score++;
  });

  useEffect(() => {
    AsyncStorage.getItem("highScore").then((hs) => {
      let best = hs ? parseInt(hs) : 0;
      if (score > best) {
        AsyncStorage.setItem("highScore", score.toString());
        setHighScore(score);
      } else {
        setHighScore(best);
      }
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Your Score: {score}</Text>
      <Text>Highest Score: {highScore}</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
