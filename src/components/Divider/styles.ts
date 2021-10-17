import styled from 'styled-components/native';
import {StyledProps} from '../../interfaces/Theme';

export const Line = styled.View`
  border-bottom-width: 1px;
  opacity: 0.4;
  margin-vertical: ${(props: StyledProps) =>
    props.theme && props.theme.spacings.M};
  margin-horizontal: ${(props: StyledProps) =>
    props.theme && props.theme.spacings.XXL};
`;
