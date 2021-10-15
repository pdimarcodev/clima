import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.colors.bg.primary};
`;

export default SafeArea;
