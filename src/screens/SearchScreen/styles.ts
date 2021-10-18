import styled from 'styled-components/native';
import {StyledProps} from '../../interfaces/Theme';

export const Container = styled.View`
  flex: 1;
  margin-top: ${(props: StyledProps) => props.theme && props.theme.spacings.M};
  margin-horizontal: ${(props: StyledProps) =>
    props.theme && props.theme.spacings.XXL};
`;

export const FoundCityButton = styled.TouchableOpacity``;

export const FoundCity = styled.Text``;
