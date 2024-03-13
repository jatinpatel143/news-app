import React, { useContext } from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import ThemeContext from '../context/ThemeContext';

const TrendingNews = () => {

    const {theme} = useContext(ThemeContext);

  return (
      
      <marquee class={theme ? "marquee-section py-3 bg-light":"marquee-section py-3"}>
        <span>
        <h4 class="text"><FaAngleDoubleLeft />
            Your Instant Update!
            <FaAngleDoubleRight />
        </h4>

        <h4 class="text"><FaAngleDoubleLeft />
            Your Instant Update!
            <FaAngleDoubleRight />
        </h4>
        
        <h4 class="text"><FaAngleDoubleLeft />
            Your Instant Update!
            <FaAngleDoubleRight />
        </h4>

        <h4 class="text"><FaAngleDoubleLeft />
            Your Instant Update!
            <FaAngleDoubleRight />
        </h4>

        <h4 class="text"><FaAngleDoubleLeft />
            Your Instant Update!
            <FaAngleDoubleRight />
        </h4>
        </span>
      </marquee>

    
  )
}

export default TrendingNews;
