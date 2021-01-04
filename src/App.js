import React, { useState} from 'react';
import './App.css';
import axios from 'axios'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

import Favarite from './Favarite';
import User from './User';
//import Movie from './Movie';
function App (){
 const [movies, setMovies] = useState([]);
 const [search, setSearch] = useState('');
 const [select, setSelect] = useState('');
 const [viewmore, setViewMore] = useState([]);

 const addFavorite =(view)=>{
    setViewMore(view);
 console.log(view)
}


 const submitValue =(e)=>{
   e.preventDefault()
    async function fetchData (){
        const request =await axios.get(`http://www.omdbapi.com/?apikey=62634223&s=${search}&y=${search}&i=${search}&plot=full`)
        setMovies(request.data.Search)
        return request
    }
    fetchData();
 
 }

    return(
        <div className="App">

         <Router>
         <Switch>
            <Route path="/" exact render={()=>(
                <div>
                 <form className="search__item form-inline" onSubmit={submitValue}>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" value={search} className="form-control" placeholder="Movie Name & Release date"  onChange={(e)=>setSearch(e.target.value)}/>
                    </div>
                      <button className="btn btn-outline-primary mb-2" type="submit">Search</button>
                  </form> 
                  <User list={movies} addFavorite={addFavorite}  />
                </div> 
  
            )}  />
              
          <Route path="/movieInfo/:name" exact component={Favarite}  />
          
          </Switch>
         </Router>
      
        </div>
      )
 
}
export default App;
