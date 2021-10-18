import {useNavigation} from '@react-navigation/core';
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDebounce} from '../../hooks/useDebounce';
import {useGetCityByName} from '../../hooks/useGetCityByName';
import {
  Container,
  FoundCity,
  FoundCityButton,
  SearchText,
  TextBackground,
} from './styles';

interface Props {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

const SearchInput = ({query, setQuery}: Props) => {
  // const {data, loading, error} = useGetCityByName(query);
  // const debounced = useDebounce(query);

  // useEffect(() => {
  //   onDebounce(debounced);
  //   console.log(debounced);
  // }, [debounced]);

  return (
    <Container>
      <TextBackground>
        <SearchText
          placeholder="Search city..."
          autoCapitalize="none"
          autoCorrect={false}
          value={query}
          onChangeText={setQuery}
        />
        <Icon name="search-outline" color="grey" size={30} />
      </TextBackground>
    </Container>
  );
};

export default SearchInput;
