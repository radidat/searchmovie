import React from 'react'
import Carousel from 'react-bootstrap/Carousel'







 export function CarouselBootstrap(props){
   
   const movies = props.movies

  const moviesOne = movies[13]
  const moviesTwo = movies[4]
  const moviesThree = movies[3]
  const moviesFour = movies[15]
   const moviesFive = movies[17]

  const imageOne = Object.assign({},moviesOne)
  const imageTwo = Object.assign({},moviesTwo) 
  const imageThree = Object.assign({},moviesThree) 
  const imageFour = Object.assign({},moviesFour)
  const imageFive = Object.assign({},moviesFive)
  

  const urlOne =`https://image.tmdb.org/t/p/w500${imageOne.backdrop_path}`
  const urlTwo =`https://image.tmdb.org/t/p/w500${imageTwo.backdrop_path}`
  const urlThree =`https://image.tmdb.org/t/p/w500${imageThree.backdrop_path}`
  const urlFour =`https://image.tmdb.org/t/p/w500${imageFour.backdrop_path}`
  const urlFive =`https://image.tmdb.org/t/p/w500${imageFive.backdrop_path}`
  


   return  <Carousel style={{ width : '1000px', marginLeft:'180px'}}>
   <Carousel.Item>
     <img
       className="d-block w-100 height height"
       src={urlOne} alt={imageOne.title}
       alt="First slide"
     />
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100 height"
       src={urlTwo}
       alt="Third slide"
     />
 
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100 height"
       src={urlThree} 
       alt="Third slide"
     />
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100 height"
       src={urlFour}
       alt="Third slide"
     />
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100 height"
       src={urlFive}
       alt="Third slide"
     />
   </Carousel.Item>
 
 </Carousel>

 }

