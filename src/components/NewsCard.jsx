import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import two from "../assets/two-removebg-preview.png"

const NewsCard = ({news}) => {

  const {theme} = useContext(ThemeContext);

  return (

    <div className="col-md-12">
       
  <div className="card mb-3">

   <div className={theme ? "row g-0 bg-dark text-light":"row g-0 bg-warning"}>

    <div className="col-md-4">
      <img src={!news.urlToImage ? two : news.urlToImage} className="img-fluid rounded-start" alt="..."/>
    </div>

    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{news.title}</h5>
        <p className="card-text">{news.description}</p>
        {/* <p className="card-text"><small className="text-muted">{news.author}</small></p> */}
        <a href={news.url} target="_blank" className={theme ? "btn btn-sm btn-secondary float-end mb-3":"btn btn-sm btn-dark float-end mb-3"}>Read More</a>

         {/* link tag use krenge to 'to' ka use hota he
         or anchor tag ka use krenge to 'href' ka use hota he
         
         1 -> link tag ka use khud ki website pr jane ke liye
         2 -> anchor tag ka use dusri website pr jane ke liye
         3 -> read more krne pr original website pr pahucha dega to hm chahte he
              ki User hamari website ko chod kr nhi jaye to hm "target="_blank"" ka
              krte he to us url pr to jayga pr new tab open ho jayga
         */}

      </div>
    </div>

   </div>

  </div>

    </div>


  )
}

export default NewsCard;
