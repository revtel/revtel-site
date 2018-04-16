import React, {Component} from 'react'
import styled from 'styled-components'

const breakpoint = 600;

let Wrapper = styled.div`
    display: flex;
    height: 180px;
    position: relative;
    ${props => props.extraStyle || ''}

    @media screen and (max-width: ${breakpoint}px) {
       height: 100px; 
    }
`
let Figure = styled.figure`
    width: 180px;
    height: 180px;
    background-image: url("${props => props.url}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #ccc;

    @media screen and (max-width: ${breakpoint}px) {
        width: 100px;
        height: 100px; 
    }
`
let Content = styled.div`
    flex: 1;
    padding: 0 10px;
    overflow: hidden;

    & > h4 {
      margin: 0;
    }

    & > span {
      display: block;
      color: #bbb;
    }

    & > p {
      margin: 0;
    }

    @media screen and (max-width: ${breakpoint}px) {
        & > p {
            display: none;
        }
    }
`

class PostItem extends Component {
    render() {
        let {post, extraStyle} = this.props;

        return (
            <Wrapper extraStyle={extraStyle}>
                <Figure url={post.cover} />
                <Content>
                    <h4>{ post.title }</h4>
                    <span>{ post.date }</span>
                    <p>{ post.excerpt }</p>
                </Content>
            </Wrapper>
        )
    }
}

export default PostItem;
