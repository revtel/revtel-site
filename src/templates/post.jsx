import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components"
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import SiteHeader from '../components/Layout/Header'
import BackToCategoryButton from '../components/BackToCategoryButton'

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    console.log(post);
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />

        <div>
          <SiteHeader location={this.props.location}/>

          <Content>
            <BackToCategoryButton category={post.category} />
            
            <h1 style={{margin: 0}}>
              {post.title}
            </h1>
            <div style={{color: '#bbb'}}>{post.date}</div>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          </Content>
        </div>
      </div>
    );
  }
}

const Content = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
      }
    }
  }
`;
