import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/navigation';
import {ApolloProvider} from '@apollo/react-hooks';
import {client} from './src/apollo/client';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
