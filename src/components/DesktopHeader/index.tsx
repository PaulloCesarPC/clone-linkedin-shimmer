import React from 'react';
import {Link} from 'react-router-dom'

import { Container, Wrapper, LinkedInIcon,SearchInput,HomeIcon,NotificationsIcon,ProfileCircle,CaretDownIcon } from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
        <Wrapper>
          <div className="left">
            <Link to="/">
                <LinkedInIcon>  </LinkedInIcon>
            </Link>
            <SearchInput placeholder="Pesquisar"></SearchInput>


          </div>

          <div className="right">
            <nav>
            <Link to="/">
                <button className="active">
                  
                  <HomeIcon/>
                  <span>Inicio</span>
                </button>
              </Link>
              <button >
                <NotificationsIcon/>
                  <span>Notificações</span>
              </button>
              <button >
                <ProfileCircle src="https://github.com/PaulloCesarPC.png"/>
                <span>
                 Eu <CaretDownIcon/>
                </span>
              
              </button>
            </nav>
          </div>
        </Wrapper>
    </Container>
  );
}

export default DesktopHeader;