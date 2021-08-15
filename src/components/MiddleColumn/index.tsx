import React from 'react';

import FeedShare from './FeedShare';
import FeedPost from './FeedPost';
import LoadingFeedPost from '../Shimmer/LoadingFeedPost';
import LoadginFeedShare from '../Shimmer/LoadginFeedShare';
import { Container } from './styles';

const MiddleColumn: React.FC<LoadingProps> = ({isLoading}) => { 
  return (
    <Container className="middle-column">

      {isLoading ? (
        <>
         <LoadginFeedShare />
          <LoadingFeedPost />
          <LoadingFeedPost />
        </>
      ):(
        <>
         <FeedShare />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </>


      )}
     
    </Container>
  );
};

export default MiddleColumn;
