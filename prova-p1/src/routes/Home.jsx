import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import blogFetch from '../axios/config';

const Home = () => {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("");

      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    getPosts();

  }, [])
  return (
    <div>
      <h1>Livros da biblioteca</h1>
      {posts.length === 0 ? <p>carregando....</p> : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>Nome: {post.title}</h2>
            <p>Páginas: {post.pageCount}</p>
            <Link to={'/more/${post.id}'}>Ler mais</Link>
          </div>
        ))

      )}
    </div>
  );
}

export default Home;