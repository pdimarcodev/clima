import {StyleSheet} from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: theme.spacings.M,
    height: 40,
  },
  cityText: {
    marginLeft: theme.spacings.XXL,
    fontSize: 30,
    color: theme.colors.text.secondary,
  },
  temperatureText: {
    marginLeft: theme.spacings.XXL,
    fontSize: 30,
    color: theme.colors.text.primary,
  },
  icon: {
    width: 50,
    height: '100%',
    marginLeft: 10,
  },
  chevron: {
    paddingRight: theme.spacings.XXL,
    color: theme.colors.text.tertiary,
  },
});
