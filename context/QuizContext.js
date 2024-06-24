import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizCards, setQuizCards] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@quizCards');
        if (jsonValue != null) {
          setQuizCards(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error("Error loading data from AsyncStorage", e);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        const jsonValue = JSON.stringify(quizCards);
        await AsyncStorage.setItem('@quizCards', jsonValue);
      } catch (e) {
        console.error("Error saving data to AsyncStorage", e);
      }
    };
    saveData();
  }, [quizCards]);

  const addQuizCard = (quizCard) => {
    quizCard.id = (quizCards.length + 1).toString();
    setQuizCards([...quizCards, quizCard]);
  };

  const editQuizCard = (quizCard) => {
    setQuizCards(quizCards.map(card => card.id === quizCard.id ? quizCard : card));
  };

  const deleteQuizCard = (quizCardId) => {
    setQuizCards(quizCards.filter(card => card.id !== quizCardId));
  };

  return (
    <QuizContext.Provider value={{ quizCards, addQuizCard, editQuizCard, deleteQuizCard }}>
      {children}
    </QuizContext.Provider>
  );
};
