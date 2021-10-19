import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyledProps} from '../../interfaces/Theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props: StyledProps) =>
    props.theme && props.theme.colors.bg.secondary};
`;

export const AddButton = styled.Button`
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  color: ${(props: StyledProps) => props.theme.colors.text.quaternary};
`;

export const Temperature = styled.Text`
  margin-top: 30px;
  text-align: right;
  font-size: 100px;
  margin-right: 15px;
  color: ${(props: StyledProps) => props.theme.colors.text.primary};
`;

export const WeatherIcon = styled.Image`
  align-self: center;
  width: 200px;
  height: 100px;
  margin-top: 10px;
`;

export const City = styled.Text`
  margin-top: 15px;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  color: ${(props: StyledProps) => props.theme.colors.text.quaternary};
`;

export const Data = styled.Text`
  text-align: left;
  font-size: 30px;
  margin-left: 30px;
  color: ${(props: StyledProps) => props.theme.colors.text.quaternary};
`;

export const WindDataContainer = styled.View`
  flex-direction: row;
  height: 40px;
`;

interface WindArrowProps extends StyledProps {
  deg: number;
}

export const WindArrow = styled(Icon).attrs((props: WindArrowProps) => ({
  deg: `rotate(${props.deg}deg);`,
}))<WindArrowProps>`
  width: 30px;
  height: 30px;
  margin-top: 4px;
  margin-left: 15px;
  transform: ${props => props.deg};
  color: ${(props: StyledProps) => props.theme.colors.text.quinary};
`;
