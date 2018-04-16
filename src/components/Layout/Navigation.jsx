import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components'
import UserLinks from '../UserLinks'

const Wrapper = styled.div`
    width: 100%;
    height: 63px; 
`

const NavContainer = styled.div`
  z-index: 10;
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
      <Wrapper>
        <NavContainer>
            <section>
                <Link className='nav-link' style={{fontWeight: 'bold', color: 'orange'}} to='/' >Revtel's Blog</Link>
                <Link className='nav-link' style={{color: 'white'}} to='/categories/tech/' >技術文章</Link>
                <Link className='nav-link' style={{color: 'white'}} to='/categories/biz/' >創業文章</Link>
            </section>
            <span><UserLinks /></span>
        </NavContainer>
      </Wrapper>
    )
  }
}

export default Navigation
