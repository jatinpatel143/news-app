import React from 'react';
import banner_One from "../assets/banner_1.jpg"
import banner_Two from "../assets/banner_2.jpg"
import banner_Three from "../assets/banner_3.jpg"


const Carousal = () => {
  return (

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner pt-1">
    <div class="carousel-item active">
      <img src={banner_One} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner_Two} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner_Three} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   
  )
}

export default Carousal;
