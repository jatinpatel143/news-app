import React, { useContext, useState } from 'react'
import ThemeContext from '../context/ThemeContext';
import { fetchNews } from '../context/news/NewsAction';
import NewsContext from '../context/news/NewsContext';

const Navbar = () => {

  const {theme} = useContext(ThemeContext);
  const {dispatch} = useContext(NewsContext);

  const [text,setText] = useState("");

  const getNews = async (topic) =>{
    const data = await fetchNews(topic);
    dispatch({
      type: "GET_NEWS",
      payload : data,
    });
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    getNews(text);
  }
 

  return (

    <nav className={theme ? "navbar navbar-expand-lg bg-dark shadow":"navbar navbar-expand-lg bg-body-tertiary shadow"}>
  <div className="container-fluid p-1">

    <a className={theme ? "navbar-brand text-light":"navbar-brand"} href="#">Newdunia</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={theme ? "nav-link active text-light":"nav-link active"} aria-current="page" href="#"
            onClick={()=>getNews("Sports") }
          >Sports</a>
        </li>
        <li className="nav-item">
          <a className={theme ? "nav-link active text-light":"nav-link active"} aria-current="page" href="#"
            onClick={()=>getNews("Politics") }
          >Politics</a>
        </li>
        <li className="nav-item">
          <a className={theme ? "nav-link active text-light":"nav-link active"} aria-current="page" href="#"
             onClick={()=>getNews("Entertainment") }
          >Entertainment</a>
        </li>
        <li className="nav-item">
          <a className={theme ? "nav-link active text-light":"nav-link active"} aria-current="page" href="#"
             onClick={()=>getNews("Technology") }
          >Technology</a>
        </li>
      </ul>

      <form className="d-flex" role="search" onSubmit={handleSubmit} >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setText(e.target.value)}/>
        <button className={theme ? "btn btn-warning text-dark":"btn btn-outline-success"} type="submit">Search</button>
      </form>

     </div>

   </div>
   
    </nav>
    
  )
}

export default Navbar;
