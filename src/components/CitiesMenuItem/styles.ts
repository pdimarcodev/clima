import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyledProps} from '../../interfaces/Theme';

export const Container = styled.View`
  flex-direction: row;
  margin-horizontal: ${(props: StyledProps) =>
    props.theme && props.theme.spacings.M};
  height: 40px;
`;

export const CitiText = styled.Text`
  margin-left: ${(props: StyledProps) =>
    props.theme && props.theme.spacings.XXL};
  font-size: 30px;
  color: ${(props: StyledProps) =>
    props.theme && props.theme.colors.text.secondary};
`;

export const TemperatureText = styled(CitiText)`
  color: ${(props: StyledProps) =>
    props.theme && props.theme.colors.text.primary};
`;

export const WeatherIcon = styled.Image`
  width: 50px;
  height: 100%;
  margin-left: 10px;
`;

export const Chevron = styled(Icon)`
  padding-right: ${(props: StyledProps) =>
    props.theme && props.theme.spacings.XXL};
  color: ${(props: StyledProps) =>
    props.theme && props.theme.colors.text.tertiary};
`;
