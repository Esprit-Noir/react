import React from 'react';

class ArticleDetail extends React.Component {
  render() {
    const { match, articles } = this.props;
    const articleId = parseInt(match.params.id);

    // Trouver l'article correspondant
    const article = articles.find(article => article.id === articleId);

    if (!article) {
      return <div>Article non trouvé.</div>;
    }

    return (
      <div>
        <h2>{article.title.rendered}</h2>
        <p>Date de publication : {new Date(article.date).toLocaleDateString()}</p>
        <div dangerouslySetInnerHTML={{ __html: article.content.rendered }}></div>
        {/* Ajoutez d'autres détails de l'article ici */}
      </div>
    );
  }
}

export default ArticleDetail;
