import React from 'react';
import Articles from '../components/Articles';
import articleContent from './article-content';

function ArticleList() {
  return (
    <div>
      <h1>List of Article</h1>
      <Articles articles={articleContent}/>
    </div>
  )
}

export default ArticleList
