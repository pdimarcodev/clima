import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface Props {
  title: string;
}

const HeaderTitle: FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;
