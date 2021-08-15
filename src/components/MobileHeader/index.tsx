import React from 'react';

import { Container , ProfileCircle, SearchInput, MessageIcon} from './styles';

const MobileHeader: React.FC = () => {
  return (
  <Container>
      <ProfileCircle src="http://github.com/PaulloCesarPc.png"></ProfileCircle>
      <SearchInput placeholder="Pesquisar"></SearchInput>
      <MessageIcon></MessageIcon>
  </Container>
    );
}

export default MobileHeader;