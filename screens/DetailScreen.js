import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import { QuizContext } from '../context/QuizContext';

const DetailScreen = ({ route, navigation }) => {
  const { quizCard } = route.params;
  const { deleteQuizCard } = useContext(QuizContext);

  const handleEdit = () => {
    navigation.navigate('Edit', { quizCard });
  };

  const handleDelete = () => {
    deleteQuizCard(quizCard.id);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge">Question</Text>
          <Text style={styles.content}>{quizCard.question}</Text>
          <Text variant="titleLarge">Answer</Text>
          <Text style={styles.content}>{quizCard.answer}</Text>
        </Card.Content>
        <Card.Actions style={styles.buttonContainer}>
          <Button mode="contained" onPress={handleEdit} style={styles.button}>Edit</Button>
          <Button mode="contained" onPress={handleDelete} style={styles.button}>Delete</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    padding: 20,
  },
  content: {
    fontSize: 16,
    marginVertical: 10,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    margin: 5,
  },
});

export default DetailScreen;
