import React from 'react';
import Articles from '../components/Articles';
import articleContent from './article-content';
import PageNotFound from './PageNotFound';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  if(!article) return <PageNotFound/>

  const otherArticle = articleContent.filter(article => article.name !== name)

  return (
    <div>
      <h3> {article.title} </h3>
      {article.content.map((paragraph, key)=>(
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles</h3>
      <Articles articles={otherArticle}/>
    </div>
  )
}

export default ArticlePage
