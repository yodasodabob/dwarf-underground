import React, { Component } from 'react'
import './ArticleLinks.css'

class ArticleLinks extends Component {
    render(){
        return(
        <div className="large-8 medium-12 columns article">
            <div className="article-links">
          <a className="article-link" href="#">
            <i className="fa fa-comments-o"></i>
            <span className="article-link-text">Comments</span>
          </a>
          <a className="article-link" href="#">
            <i className="fa fa-share"></i>
            <span className="article-link-text">Share Post</span>
          </a>
         </div>
        </div>
        )
    }
}
export default ArticleLinks