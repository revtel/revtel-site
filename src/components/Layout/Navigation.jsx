import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components'
import UserLinks from '../UserLinks'

const NavContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  width: 100%;
  background: ${props => props.theme.brand};
  
  .nav-link {
    font-size: 1.6rem;
    margin-right: 10px;
    font-weight: 200;
    color: black;
  }
  
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    section {
    }
    
    span {
      display: none;
    }
    
  }
`

class Navigation extends React.Component {
  render() {
    let {fixed} = this.props;
    return (
      <NavContainer>
        <section>
          <Link className='nav-link' to='/' >首頁</Link>
          <Link className='nav-link' to='/categories/tech/' >技術</Link>
          <Link className='nav-link' to='/categories/biz/' >創業</Link>
          <Link className='nav-link' to='/lesson-one' >教學</Link>
        </section>
        <span><UserLinks /></span>
      </NavContainer>
    )
  }
}

export default Navigation
