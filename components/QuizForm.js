import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const QuizForm = ({ onSubmit, initialData }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    if (initialData) {
      setQuestion(initialData.question);
      setAnswer(initialData.answer);
    }
  }, [initialData]);

  const handleSubmit = () => {
    const quizCardData = {
      ...initialData,
      question,
      answer,
    };

    onSubmit(quizCardData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Question:</Text>
      <TextInput
        mode="outlined"
        value={question}
        onChangeText={setQuestion}
        placeholder="Enter question"
        style={styles.input}
      />
      <Text style={styles.label}>Answer:</Text>
      <TextInput
        mode="outlined"
        value={answer}
        onChangeText={setAnswer}
        placeholder="Enter answer"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>Submit</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default QuizForm;
