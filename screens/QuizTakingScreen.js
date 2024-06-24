import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { QuizContext } from '../context/QuizContext';

const QuizTakingScreen = () => {
    const { quizCards } = useContext(QuizContext);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [userAnswers, setUserAnswers] = useState(new Array(quizCards.length).fill(''));
    const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
    const [quizCompleted, setQuizCompleted] = useState(false);

    useEffect(() => {
        if (answeredQuestions.size === quizCards.length) {
            setQuizCompleted(true);
        }
    }, [answeredQuestions, quizCards]);

    const handleAnswerChange = (answer) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIndex] = answer;
        setUserAnswers(newAnswers);
    };

    const handleSubmitAnswer = () => {
        if (quizCompleted) {
            return;
        }

        const currentQuestion = quizCards[currentQuestionIndex];
        const userAnswer = userAnswers[currentQuestionIndex].toLowerCase();
        const correctAnswer = currentQuestion.answer.toLowerCase();

        if (userAnswer === correctAnswer && !answeredQuestions.has(currentQuestionIndex)) {
            setScore(score + 1);
            setCorrectAnswers(correctAnswers + 1);
        } else if (!answeredQuestions.has(currentQuestionIndex)) {
            setIncorrectAnswers(incorrectAnswers + 1);
        }

        setAnsweredQuestions(new Set(answeredQuestions).add(currentQuestionIndex));
        moveToNextQuestion();
    };

    const moveToNextQuestion = () => {
        if (currentQuestionIndex < quizCards.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            console.log('Final Score:', score);
            console.log('User Answers:', userAnswers);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.questionNumberText}>
                Question {currentQuestionIndex + 1} of {quizCards.length}
            </Text>
            <Text style={styles.questionText}>{quizCards[currentQuestionIndex].question}</Text>
            <TextInput
                mode="outlined"
                style={styles.input}
                onChangeText={handleAnswerChange}
                value={userAnswers[currentQuestionIndex]}
                placeholder="Enter your answer"
                editable={!quizCompleted}
            />
            <Button
                mode="contained"
                onPress={handleSubmitAnswer}
                style={styles.button}
                disabled={quizCompleted}
            >
                Submit
            </Button>
            <View style={styles.scoreContainer}>
                <Text style={styles.scoreText}>Score: {score} / {quizCards.length}</Text>
                <Text style={styles.answeredText}>Correct Answers: {correctAnswers}</Text>
                <Text style={styles.answeredText}>Incorrect Answers: {incorrectAnswers}</Text>
            </View>
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
    questionNumberText: {
        fontSize: 16,
        marginBottom: 10,
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    scoreContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    scoreText: {
        fontSize: 16,
    },
    answeredText: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
    },
    input: {
        marginBottom: 10,
        width: '100%',
    },
    button: {
        marginTop: 20,
    },
});

export default QuizTakingScreen;
