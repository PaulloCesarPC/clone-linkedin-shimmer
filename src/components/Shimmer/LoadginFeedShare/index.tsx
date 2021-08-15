import React from 'react';
import Panel from '../../Panel';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadginFeedShare: React.FC = () => {
  return (
    <Container>
        <Panel className="no-shadow">
            <Skeleton className="row-skeleton"></Skeleton>
            <Skeleton className="row-skeleton"></Skeleton>
        </Panel>
    </Container>
    );
}

export default LoadginFeedShare;