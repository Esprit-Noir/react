import { useParams } from 'react-router-dom';
import React, {useEffect, useState} from "react";
const ArticleDetail = () =>{
    const [article, setArticle] = useState({});
      const { id } = useParams();


    useEffect(() => {
        // Define the URL of the external API
        const apiUrl = `https://techcrunch.com/wp-json/wp/v2/posts/${id}`;

        // Make a GET request using the fetch API
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setArticle(data);
            })
            .catch(error => {
                console.error('Error fetching article:', error);
            });
    }, [id]);
    console.log(article)
    return (
      <div>
          <img src={article.jetpack_featured_media_url} alt="" className="post-img" />
      </div>
    );
}

export default ArticleDetail;
