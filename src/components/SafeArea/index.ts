import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {StyledProps} from '../../interfaces/Theme';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props: StyledProps) =>
    props.theme && props.theme.colors.bg.primary};
`;

export default SafeArea;
