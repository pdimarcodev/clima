import theme from '../../theme';
import styled from 'styled-components/native';

export const TitleContainer = styled.View`
  padding-top: ${theme.spacings.XXL};
  padding-bottom: ${theme.spacings.XXL};
  padding-horizontal: ${theme.spacings.XXL};
  background-color: ${theme.colors.bg.primary};
`;
export const Title = styled.Text`
  color: ${theme.colors.text.secondary};
  font-size: 35px;
  font-weight: bold;
  margin-horizontal: ${theme.spacings.M};
`;
