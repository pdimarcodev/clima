import {useState} from 'react';

export const useSearch = () => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (text: string) => {
    if (text.length > 2 || text === '') {
      setQuery(text);
    }
  };

  return {query, setQuery, handleChange};
};
