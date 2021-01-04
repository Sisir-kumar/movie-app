import React from 'react'
import { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

class  User  extends Component {



  viewMore (movie){
  console.log(movie)
  }

   render(){
    return (
      <div>
          <Navbar />
          <div className="Cards">
            {!this.props.list? "" :this.props.list.map(movie=>{
             return (
                <div className="card">
                  <img className="img-thumbnai"  height="200" width="245" src={movie.Poster} alt={movie.Title} />
                  <div className="container">
                    <h4><b>{movie.Title} </b></h4> 
                    <p>{movie.Year} </p>
                   <Link to={`/movieInfo/${movie.Title}`} className="btn" > View More....</Link>
                  </div>
                </div>
            )
          })}
         </div> 
      </div>
  )
   }
}

export default User
