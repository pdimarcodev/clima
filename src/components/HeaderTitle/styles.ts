import styled from 'styled-components/native';
import {StyledProps} from '../../interfaces/Theme';

export const TitleContainer = styled.View`
  padding-top: ${(props: StyledProps) =>
    props.theme && props.theme.spacings.XXL};
  padding-bottom: ${(props: StyledProps) =>
    props.theme && props.theme.spacings.XXL};
  padding-horizontal: ${(props: StyledProps) =>
    props.theme && props.theme.spacings.XXL};
  background-color: ${(props: StyledProps) =>
    props.theme && props.theme.colors.bg.primary};
`;
export const Title = styled.Text`
  color: ${(props: StyledProps) =>
    props.theme && props.theme.colors.text.secondary};
  font-size: 35px;
  font-weight: bold;
  margin-horizontal: ${(props: StyledProps) =>
    props.theme && props.theme.spacings.M};
`;
