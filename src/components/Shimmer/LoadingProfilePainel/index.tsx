import React from 'react';

import { Container } from './styles';
import Panel from '../../Panel';
import Skeleton from '../../Skeleton';

const LoadingProfilePainel: React.FC = () => {
  return (
    <Container>
        <Panel className="no-shadow">
            <Skeleton className="bg-skeleton"/>
            <span>
                <Skeleton className="avatar-skeleton"></Skeleton>
                <Skeleton className="row-skeleton"></Skeleton>
                <Skeleton className="row-skeleton"></Skeleton>
            </span>
        </Panel>
    </Container>
  
    );
}

export default LoadingProfilePainel;