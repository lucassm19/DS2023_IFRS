import React from 'react';
import blogFetch from '../axios/config';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewPost.css";


const NewPost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()

  const createPost = async (e) => {
    e.preventDefault();

    const post = { title, description, id: 1 }

    await blogFetch.post("/", {
       body:post,
    });
  };

  return (<div className="new-post">
    <h2>Inserir novo livro:</h2>
    <form onSubmit={(e) => createPost(e)}>
      <div className="form-control">
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" id="title" placeholder="Digite o Título" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="description">Descrição:</label>
        <textarea name="description" id="description" placeholder="Digite a descrição" onChange={(e) => setDescription(e.target.value)} />
      </div>
      <input type="submit" value="Criar Post" className="btn" />
    </form>
  </div>
  )
};

export default NewPost;