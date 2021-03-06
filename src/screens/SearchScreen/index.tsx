import React, {useEffect} from 'react';
import {Alert, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {CommonActions} from '@react-navigation/routers';
import {SearchInput} from '../../components';
import {FoundCity, FoundCityButton} from './styles';
import {useDebounce} from '../../hooks/useDebounce';
import {useGetCityByName} from '../../hooks/useGetCityByName';
import {useSearch} from '../../hooks/useSearch';
import {Container} from './styles';

const SearchScreen = () => {
  const {query, setQuery, handleChange} = useSearch();
  const {data, loading, error} = useGetCityByName(query);
  const debounced = useDebounce(query);
  const navigation = useNavigation();

  const onPress = () => {
    Keyboard.dismiss();
    navigation.dispatch(CommonActions.navigate('SearchDetailScreen', data));
  };

  useEffect(() => {
    handleChange(debounced);
  }, [debounced]);

  useEffect(() => {
    error && Alert.alert(error.message);
  }, [error]);

  return (
    <Container>
      <SearchInput query={query} setQuery={setQuery} />
      {!loading && data && (
        <FoundCityButton activeOpacity={0.8} onPress={onPress}>
          <FoundCity>
            {data?.name}, {data?.country}
          </FoundCity>
        </FoundCityButton>
      )}
    </Container>
  );
};

export default SearchScreen;
