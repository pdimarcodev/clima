import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Container} from './styles';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon color="black" name="arrow-back-outline" size={30} />
      </TouchableOpacity>
    </Container>
  );
};

export default BackButton;
