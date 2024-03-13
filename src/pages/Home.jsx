import React, { useContext, useEffect } from 'react'
import Carousal from '../components/Carousal';
import TrendingNews from '../components/TrendingNews';
import WeatherCard from '../components/WeatherCard';
import NewsCard from '../components/NewsCard';
import NewsContext from '../context/news/NewsContext';
import { fetchNews } from '../context/news/NewsAction';
import ThemeContext from '../context/ThemeContext';


const Home = () => {

  const {theme} = useContext(ThemeContext);
  const {allNews,dispatch} = useContext(NewsContext);


  const getNews = async () =>{
    const data = await fetchNews('Indore');   // ab data home ke pass he to hme state me pahunchana he
    dispatch({
      type:"GET_NEWS",
      payload:data,
    })
  }

  useEffect(()=>{

    getNews();
  //  const data = fetchNews('Indore');  // ab function kuch ne kuch return krega to datame store krake console
  //  console.log(data);   // promise pending to hm useEffect me async/await allow nhi he
  },[])

  return (
    <div className={theme ? "container-fluid bg-secondary":"container-fluid"}>

      
        <Carousal/>
        <TrendingNews/>

        <div className="row g-3 pt-4">

          <div className="col-sm-12 col-md-4">
            <WeatherCard/>
          </div>

          <div className="col-sm-12 col-md-8">

            <div className="row g-2">
              {     
                !allNews || allNews.length == 0 ?(
                  <h1 className="text-center display-1">Loading...</h1>
                ):
                (
                  // id sbhi ki ni he kisi ki null he to hm index ka use kr skte he kyuki ye unique hota he 0,1,2,3,4...
                  allNews.map((news,index) => <NewsCard key={index} news={news}/>)
                )
                
              }
            </div>

          </div>

        </div>
      
    </div>
  )
}

export default Home;
