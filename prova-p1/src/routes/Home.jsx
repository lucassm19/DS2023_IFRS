import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import api from '../axios/config';
import "./Home.css";

const Home = () => {

  const [books, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await api.get("");

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
      {books.length === 0 ? <p>carregando....</p> : (
        books.map((book) => (
          <div className="book" key={book.id}>
            <h2>Nome: {book.title}</h2>
            <p>Páginas: {book.pageCount}</p>
            <Link to={`/book/${book.id}`}>Ler mais</Link>
          </div>
        ))
      )}
    </div>
    
  );
}

export default Home;