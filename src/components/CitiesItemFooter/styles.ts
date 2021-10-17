import styled from 'styled-components/native';
import {StyledProps} from '../../interfaces/Theme';

export const Footer = styled.View`
  margin-bottom: ${(props: StyledProps) =>
    props.theme && props.theme.spacings.XXL};
`;
