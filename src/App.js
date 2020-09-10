import React, { Component,createRef} from 'react';
import './App.css';
import {Search}from './components/Search'
import {CarouselBootstrap}from './components/CarouselBootstrap'
import {BrowserRouter, Link, Switch,Redirect,Route } from 'react-router-dom'
import {Container} from './components/Container'
import  {ContainerTv} from './components/tvshows/ContainerTv'




 export const apiKey= '3f382d39cbbf451384dbe9bd0c0cef57'
class App extends Component {
                    
              constructor(props){
                super(props)
                this.state ={ 
                  error:'', 
                  isLoading: false,
                  tvShows: [],
                  movies: [],
                  searchs: []
                }
                this.input = createRef()
                this.handleClick = this.handleClick.bind(this)
              }

              handleClick(e){
                e.preventDefault()
                this.fetchData()
                this.input.current.value =''
               
              }
           componentDidMount() {
            this.setState({isLoading: true})
            this.fetchData()

/*récupération des films et series sur l'api themoviedb*/
    Promise.all([fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR&page=1`),
    fetch(`
    https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=fr-FR&page=1`)])
    .then(([resp1, resp2])=> Promise.all([resp1.json(), resp2.json()])
      
).then(([data1, data2])=>{
 this.setState({
   movies: data1.results, 
   tvShows: data2.results,
   isLoading:false
 })
})
    }
    /* rechercher un film ou une série sur l'api themoviedb*/
    fetchData =() =>{
      if(this.input.current.value===''){
        return null
      }

      fetch(`
      https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=fr-FR&query=${this.input.current.value}&page=1&include_adult=false`)
      .then(response => {
        if (response.ok) {
          return response.json();
        
        } 
        else{ 
          throw new Error('Something went wrong ...');
        }
      })
      .then(data =>{ this.setState({ searchs: [...this.state.searchs,data.results[0]], isLoading: false })
      console.log(this.state.searchs)})
      .catch(error => this.setState({ error, isLoading: false }));
    

    
   }
  render(){
    
    const dataMovies = this.state.movies.slice()
    const tvShows = this.state.tvShows.slice()
    /*si la recherche éffectuée est un film, il est ajouté sur la catégorie film si 
    elle est ajouté sur la catégorie série*/
          const searchs= this.state.searchs
        searchs.filter(function(search){
        if(search.media_type==='movie'){
        return dataMovies.unshift(search)
        }else if(search.media_type==='tv'){
          return tvShows.unshift(search) 
        }else if(search===undefined){
          return false
        }
    })
    return (
      <div className="App">
             <div className='header'>
            { this.state.isLoading===false && <CarouselBootstrap movies= {this.state.movies}  />} 
          <Search ref={this.input} handleClick ={this.handleClick}searchs={this.state.searchs} value ={this.getValue}/>
             </div>
             <BrowserRouter>
             <nav>
                  <ul>
        <li><Link to ='/movies'>Movies</Link></li>
        <li><Link to ='/tvshow' >Tv shows</Link></li>
    </ul>
    <Switch>
    <Route exact path="/" render={() => <Redirect to="/movies" />}
              />
        <Route path="/movies" render={()=>(<Container dataMovies={dataMovies}/>)} />
    <Route path='/tvshow'  render ={ ()=>(<ContainerTv tvShows ={tvShows} />)}  />
    </Switch>
 </nav>
     </BrowserRouter>
        </div>
    )
       
  }
  
}




export default App;


