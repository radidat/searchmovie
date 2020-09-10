import React from 'react'
import {CardBootstrap} from './CardBootstrap'

/*cotainer catégorie film*/
 export function Container(props){

    const dataMovies = props.dataMovies
          
    return <div className='container row d-flex justify-content-center text-center' style={ { marginLeft:'95px'}}>
          {dataMovies.map(movie=>
    <CardBootstrap key={movie.id} title={movie.title}
     image={movie.poster_path} 
     overview={movie.overview} 
     release ={movie.release_date} note ={movie.vote_average}
     count={movie.vote_count}/>)}
    </div>
}