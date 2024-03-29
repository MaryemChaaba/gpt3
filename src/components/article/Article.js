    
import React from 'react'

import './article.css'

function Article({imgURL,date,text}) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-img'>
        <img src={imgURL} alt="blog img" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read full Article</p>
      </div>
    </div>
  )
}

export default Article