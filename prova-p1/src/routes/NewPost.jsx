import { useReducer } from "react";
import api from "../axios/config";
import { useNavigate, Link } from "react-router-dom";
import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();

  const [state, reduc] = useReducer(
    (oldState, action) => ({ ...oldState, ...action }),
    { title: "", description: "", pageCount: "", excerpt: "", publishDate: "" }
  );

  const createBook = async (e) => {
    e.preventDefault();
    await api
      .post("/", {
        body: state,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Criado com sucesso!");
          navigate("/");
        } else {
          alert("Erro ao criar");
        }
      });
  };

  const handle = (name, value) => {
    reduc({ [name]: value });
  };

  return (
    <div className="new-book">
      <h2>Inserir novo livro:</h2>
      <form onSubmit={(e) => createBook(e)}>
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
        <input type="submit" value="Criar livro" className="btn" />
      </form>
      <Link to="/" className='btn'>Voltar aos livros!</Link>
    </div>
  );
};

export default NewPost;
