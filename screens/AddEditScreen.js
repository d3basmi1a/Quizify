import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import QuizForm from '../components/QuizForm';
import { QuizContext } from '../context/QuizContext';

const AddEditScreen = ({ navigation, route }) => {
  const { quizCard } = route.params || {};
  const { addQuizCard, editQuizCard } = useContext(QuizContext);

  const handleSubmit = (quizCardData) => {
    if (quizCard && quizCard.id) {
      editQuizCard(quizCardData);
    } else {
      addQuizCard(quizCardData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <QuizForm onSubmit={handleSubmit} initialData={quizCard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default AddEditScreen;
