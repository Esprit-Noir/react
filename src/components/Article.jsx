import React from 'react';

const Article = ({article}) => {
    return (
            <div className={`post-box ${article.primary_category.slug}`} >
                <img src={article.jetpack_featured_media_url} alt="" className="post-img" />
                <h2 className="category">{article.primary_category.name}</h2>
                <a href={`/articles/${article.id}`} className="post-title">{article.title.rendered}</a>
                <span className="post-date">{article.date}</span>
                <p className="post-description" dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}></p>
                <div className="profile">
                    <img src="images/testi1.jpg" alt="" className="profile-img" />
                    <span className="profile-name">MKHB</span>
                </div>
            </div>
    );
}

export default Article;