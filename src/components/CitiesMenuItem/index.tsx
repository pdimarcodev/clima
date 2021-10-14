import {useNavigation, CommonActions} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {City} from '../../interfaces/City';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {MenuItem} from '../interfaces/interfaces';
// import Spacer from './Spacer';

interface Props {
  city: City;
}

const CitiesMenuItem = ({city}: Props) => {
  const navigation = useNavigation();

  console.log(city?.name);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {}}
      //onPress={() => {}}
    >
      <View style={styles.container}>
        <Text style={styles.itemText}>{city?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CitiesMenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
    color: 'black',
  },
});
