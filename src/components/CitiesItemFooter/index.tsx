import React from 'react';
import {View} from 'react-native';
import {Divider} from '../../components';
import theme from '../../theme';

const CitiesItemFooter = () => {
  return (
    <>
      <Divider />
      <View style={{marginBottom: theme.spacings.XXL}} />
    </>
  );
};

export default CitiesItemFooter;
