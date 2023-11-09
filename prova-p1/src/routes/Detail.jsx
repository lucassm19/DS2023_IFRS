import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useReducer } from "react";
import api from "../axios/config.js";
import "./Home.jsx";
import "./Detail.css";

const Detail = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [state, reduc] = useReducer(
    (oldState, action) => ({ ...oldState, ...action }),
    { title: "", description: "", pageCount: "", excerpt: "", publishDate: "" }
  );

  useEffect(() => {
    api.get(`/${id}`).then((res) => reduc(res.data));
  }, [id]);

  const handle = (name, value) => {
    reduc({ [name]: value });
  };

  const deleteBook = () => {
    api.delete(`/${id}`).then((res) => {
      if (res.status === 200) {
        alert("Deletado com sucesso!");
        navigate("/");
      } else {
        alert("Falha ao deletar");
      }
    });
  };

  const attBook = (e) => {
    e.preventDefault();

    api.put(`/${id}`, state).then((res) => {
      if (res.status === 200) {
        alert("Atualizado com sucesso!");
      } else {
        alert("Erro ao atualizar!");
      }
    });
  };

  return (
    <div>
      <h1>Detalhes</h1>
      
      <form onSubmit={(e) => attBook(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o Título"
            value={state.title}
            onChange={(e) => handle("title", e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">Descrição:</label>
          <textarea
            name="description"
            id="description"
            placeholder="Digite a descrição"
            value={state.description}
            onChange={(e) => handle("description", e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="pageCount">Páginas:</label>
          <input
            type="text"
            name="pageCount"
            id="pageCount"
            placeholder="Digite a quantidade de páginas"
            value={state.pageCount}
            onChange={(e) => handle("pageCount", e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="excerpt">Trecho:</label>
          <textarea
            name="excerpt"
            id="excerpt"
            placeholder="Digite trechos do livro"
            value={state.excerpt}
            onChange={(e) => handle("excerpt", e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="publishDate">Data de publicação:</label>
          <input
            type="text"
            name="publishDate"
            id="publishDate"
            placeholder="Digite a data de publicação"
            value={state.publishDate}
            onChange={(e) => handle("publishDate", e.target.value)}
          />
        </div>
        <input type="submit" value="Atualizar" className="btn" />
        <button onClick={deleteBook}>Deletar</button>
      </form>
      <Link to="/" className='btn'>Voltar aos livros!</Link>
    </div>
  );
};

export default Detail;
