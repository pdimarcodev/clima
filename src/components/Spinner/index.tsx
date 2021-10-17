import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container} from './styles';

const Spinner = () => {
  return (
    <Container>
      <ActivityIndicator size={25} color="blue" />
    </Container>
  );
};

export default Spinner;
