import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDebounce} from '../../hooks/useDebounce';
import {Container, SearchText, TextBackground} from './styles';

const SearchInput = () => {
  const [textValue, setTextValue] = useState('');
  const debounced = useDebounce(textValue);
  console.log(debounced);

  return (
    <Container>
      <TextBackground>
        <SearchText
          placeholder="Search city..."
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" color="grey" size={30} />
      </TextBackground>
    </Container>
  );
};

export default SearchInput;
