import React from 'react'
import {CardtvShow} from '../tvshows/CardtvShow'

/* container catégorie série*/
export function ContainerTv(props){

    const tvShows = props.tvShows
    console.log(tvShows)
          
    return <div className='container row d-flex justify-content-center text-center' style={ { marginLeft:'95px'}}>
    {tvShows.map(tvShow=>
<CardtvShow key={tvShow.id} title={tvShow.title}
image={tvShow.poster_path} 
overview={tvShow.overview} 
release ={tvShow.first_air_date} note ={tvShow.vote_average}
count={tvShow.vote_count}/>)}
</div>
}