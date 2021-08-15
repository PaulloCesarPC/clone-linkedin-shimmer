import React from 'react';
import {Link} from 'react-router-dom'
import { Container } from './styles';

const AdBanner: React.FC = () => {
  return (
    <Container>
      <Link to="/showroom">
          <span>Showroom Cars </span>
      </Link>      
      Interface reproduzida em busca do próximo nível.
    </Container>
  );
};

export default AdBanner;
