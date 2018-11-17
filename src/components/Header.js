import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'

const Navbar = styled.nav`
background: ${props=>props.theme.background};
`
const Logo = styled.p`
color: ${props=>props.theme.brandColor} ;
`

const Header = ({ siteTitle }) => (
  <Navbar className="navbar" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <Logo className="heading is-size-6 has-text-weight-bold">{siteTitle}</Logo>
          </div>
        </div>
      </div>
    </div>
  </Navbar>
)

export default Header
