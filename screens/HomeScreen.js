import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import QuizCard from '../components/QuizCard';
import { QuizContext } from '../context/QuizContext';

const HomeScreen = ({ navigation }) => {
  const { quizCards, deleteQuizCard } = useContext(QuizContext);

  const handleViewDetails = (quizCard) => {
    navigation.navigate('Details', { quizCard });
  };

  const handleEdit = (quizCard) => {
    navigation.navigate('Edit', { quizCard });
  };

  const handleDelete = (quizCardId) => {
    deleteQuizCard(quizCardId);
  };

  const handleAddNewQuestion = () => {
    navigation.navigate('Edit', { quizCard: null });
  };

  const handleStartQuiz = () => {
    navigation.navigate('Quiz');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={quizCards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <QuizCard
            quizCard={item}
            onViewDetails={() => handleViewDetails(item)}
            onEdit={() => handleEdit(item)}
            onDelete={() => handleDelete(item.id)}
          />
        )}
        contentContainerStyle={styles.flatList}
      />
      <Button mode="contained" onPress={handleAddNewQuestion} style={styles.addButton}>Add New Question</Button>
      <Button mode="contained" onPress={handleStartQuiz} style={styles.startButton}>Start Quiz</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  flatList: {
    paddingBottom: 20,
  },
  addButton: {
    marginTop: 20,
  },
  startButton: {
    marginTop: 10,
  },
});

export default HomeScreen;
