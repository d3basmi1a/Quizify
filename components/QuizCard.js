import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';

const QuizCard = ({ quizCard, onViewDetails, onEdit, onDelete }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.question}>Question: {quizCard.question}</Text>
        <Text style={styles.answer}>Answer: {quizCard.answer}</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" onPress={onViewDetails} style={styles.button}>View Details</Button>
        <Button mode="contained" onPress={onEdit} style={styles.button}>Edit</Button>
        <Button mode="contained" onPress={onDelete} style={styles.button}>Delete</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answer: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    margin: 5,
  },
});

export default QuizCard;
