import React from 'react';
import Panel from '../../Panel';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadingFeedPost: React.FC = () => {
  return (
    <Container>
      <Panel className="no-shadow">
        <header>
          <Skeleton className="avatar-skeleton">
            <div className="column">
              <Skeleton className="row-skeleton"></Skeleton>
              <Skeleton className="row-skeleton"></Skeleton>
            </div>

          </Skeleton>
        </header>
          <span>
              <Skeleton className="row-skeleton"></Skeleton>
              <Skeleton className="row-skeleton"></Skeleton>
          </span>
      </Panel>
    </Container>
  
    );
}

export default LoadingFeedPost;