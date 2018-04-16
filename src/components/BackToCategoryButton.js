import React, {Component} from 'react'
import Link from 'gatsby-link'

const displayNames = {
    'tech': '技術',
    'biz': '創業',
};

class BackToCagegoryButton extends Component {
    render() {
        let {category} = this.props;

        return (
            <Link 
              className='nav-link' 
              to={`/categories/${category}/`} >
              返回{displayNames[category]}文章
            </Link>
        )
    }
}

export default BackToCagegoryButton;