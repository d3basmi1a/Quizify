import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import AddEditScreen from './screens/AddEditScreen';
import DetailScreen from './screens/DetailScreen';
import QuizTakingScreen from './screens/QuizTakingScreen';

import { QuizProvider } from './context/QuizContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <QuizProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Edit" component={AddEditScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
            <Stack.Screen name="Quiz" component={QuizTakingScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QuizProvider>
  );
};

export default App;
