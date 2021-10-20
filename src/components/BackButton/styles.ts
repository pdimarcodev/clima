import styled from 'styled-components/native';
import {StyledProps} from '../../interfaces/Theme';

export const Container = styled.View`
  position: absolute;
  z-index: 999;
  elevation: 9;
  top: 40px;
  left: ${(props: StyledProps) => props.theme && props.theme.spacings.XXL};
`;
