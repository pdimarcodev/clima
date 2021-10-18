import styled from 'styled-components/native';
import {StyledProps} from '../../interfaces/Theme';

export const Container = styled.View`
  flex: 1;
  color: ${(props: StyledProps) => props.theme.colors.bg.primary};
`;
