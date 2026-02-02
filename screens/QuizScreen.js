import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { questions } from "../questions";

export default function Quiz({ navigation }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const q = questions[index];

  const choose = (opt) => {
    setAnswers({ ...answers, [q.id]: opt });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20 }}>{q.question}</Text>

      {q.options.map((opt, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => choose(opt)}
          style={{ padding: 10, backgroundColor: "#ddd", marginVertical: 5 }}
        >
          <Text>{opt}</Text>
        </TouchableOpacity>
      ))}

      <Button
        title="Previous"
        onPress={() => index > 0 && setIndex(index - 1)}
      />
      <Button
        title={index === questions.length - 1 ? "Finish" : "Next"}
        onPress={() =>
          index === questions.length - 1
            ? navigation.navigate("Result", { answers })
            : setIndex(index + 1)
        }
      />
    </View>
  );
}
