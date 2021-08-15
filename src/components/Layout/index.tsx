import React,{useState, useEffect} from 'react';

import { Container } from './styles';

import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';
import AdBanner from '../AdBanner';


const Layout: React.FC = () => {
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() =>{
      setTimeout(() => {
        setIsLoading(false);
      },1000)
  },[])

  return (
    <Container>
       
        <span>
            {!isLoading && <AdBanner/>}            
        </span>

        
        <main>
            <LeftColumn isLoading={isLoading}></LeftColumn>
            <MiddleColumn isLoading={isLoading}></MiddleColumn>
            <RightColumn isLoading={isLoading}></RightColumn>
        </main>
    </Container>
  
    );
}

export default Layout;