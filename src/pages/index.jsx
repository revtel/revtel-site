import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import SEO from "../components/SEO"
import config from "../../data/SiteConfig"
import CtaButton from '../components/CtaButton'
import Navigation from '../components/Layout/Navigation'

const addStyle = (element, extraStyle={}) => (
    <div style={extraStyle}>
        { element }
    </div>
)


class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <main>
          <Navigation />
          <IndexHeadContainer>
            <Hero>
              <img src={config.siteLogo} width='240px' />
              <h2>{config.siteTitle}</h2>
            </Hero>
          </IndexHeadContainer>
          <BodyContainer>
            <h2>大家好! 我們是Revteltech!</h2>
            <p>我們是專業的軟體開發團隊+創業者, 希望能與大家分享我們一路走來的點滴</p>
            { addStyle(<CtaButton to={'/categories/tech/'}>技術文章</CtaButton>, { marginRight: 10, display: 'inline-block'}) }
            { addStyle(<CtaButton to={'/categories/biz/'}>創業討論</CtaButton>, { marginRight: 10, display: 'inline-block'}) }
          </BodyContainer>
        </main>
      </div>
    );
  }
}

export default Index;

const IndexHeadContainer = styled.div`
  background: ${props => props.theme.brand};
  padding: 0 25px 30px 25px;
  text-align: center;
`

const Hero = styled.div`
  & > h2 {
    color: white;
    font-weight: 200;
    margin: 0;
  }
`

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;
`


/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges { 
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
