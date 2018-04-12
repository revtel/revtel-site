import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";
import SiteHeader from '../components/Layout/Header'

export default class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.pathContext.category;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="category-container">
        <Helmet
          title={`Posts in category "${category}" | ${config.siteTitle}`}
        />

        <SiteHeader location={this.props.location}/>
        <div style={{padding: '0 20px'}}>
            <PostListing postEdges={postEdges} />
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
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
