import React from "react";
import Link from "gatsby-link";
import PostItem from '../PostItem'

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post =>
          <Link to={post.path} key={post.title}>
            <PostItem post={post} extraStyle={'margin-bottom: 15px;'}/> 
          </Link>
        )}
      </div>
    );
  }
}

export default PostListing;
