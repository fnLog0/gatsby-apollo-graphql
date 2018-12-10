import React from 'react';
import styled from 'styled-components';
import { darken} from 'polished'
import swal from 'sweetalert';

import { Link } from 'gatsby'

import gatsbyLogo from '../images/gatsby-icon.png';
import apolloLogo from '../images/apollo-logo.svg';
import graphqlLogo from '../images/graphql-icon.svg';

const Navbar = styled.nav`
background: ${props=>props.theme.background};
box-shadow:0 1px 0 0 rgba(42,42,42,.15);
height: 80px;
`
const Logo = styled.p`
color: ${props=>props.theme.brandColor} ;
span{
  padding:4px;
}
`
const Button = styled.a`
background: ${props=>props.theme.secondaryColor};
border:none;
:hover{
background:${props=>darken('0.5', props.theme.secondaryColor)};
}
svg{
  color: ${props=>props.theme.primaryColor} ;
}
`

const Header = () => (
  <Navbar className="navbar" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <Button className="button" onClick={()=>swal("Good job!", "You clicked the button!", "success")}>
              <span className="icon">
                <i className="fa fa-user" />
              </span>
              <span>New User</span>
            </Button>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Logo className="heading is-size-6 has-text-weight-bold">
              <span>
                <img src={gatsbyLogo} alt="gatsby-logo" />
              </span>
              <span>
                <img src={apolloLogo} alt="apollo-logo" />
              </span>
              <span>
                <img src={graphqlLogo} alt="graphql-logo" />
              </span>
            </Logo>
          </div>
        </div>
      </div>
    </div>
  </Navbar>
);

export default Header
