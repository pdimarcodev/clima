import React, {FC} from 'react';
import {Title, TitleContainer} from './styles';

interface Props {
  title: string;
}

const HeaderTitle: FC<Props> = ({title}) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
  );
};

export default HeaderTitle;
