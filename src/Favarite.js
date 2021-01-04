import React from 'react'
import { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios'
class Favarite extends Component {
constructor(props) {
  super(props)

  this.state = {
    name:"",
    rating:"",
    writer:"",
    director:"",
    boxoffice:"",
    actor:"",
    year:"",
    plot:"",
    language:"",
    country:"",
    show:false,
    poster:""
     
  }
  console.log(this.props.match.params.name)
}

 async componentDidMount(){
  const name = this.props.match.params.name
  const request =await axios.get(`http://www.omdbapi.com/?apikey=62634223&t=${name}`)
  if(request ){
    console.log("kjkh")
    this.setState({
      name:request.data.Title,
      rating:request.data.imdbRating,
      writer:request.data.Writer,
      director:request.data.Director,
      actor:request.data.Actors,
      year:request.data.Year,
      plot:request.data.Plot,
      language:request.data.Language,
      country:request.data.Country,
      show:true,
      poster:request.data.Poster
    })
  }
  console.log(request)
  return request
 }

   render(){
    const showHideClassName =this.state.show ? "modal display-block" : "modal display-none";
    return (
      <div className="viewinfo">
        <Navbar />
          <div >
              <div className="justi">

                  <div className="movie_details ">
                    <div className="movie_left">
                       <img className="img-thumbnai"  height="200" width="300" src={this.state.poster ? this.state.poster :""} alt="" />
                    </div>
                     <div className="movie_right">
                       <p>{"Title:"+this.state.name}</p>
                       <p>{"Actor:"+this.state.actor} </p>
                       <p>{this.state.director ? "Director:"+ this.state.director :""}</p>
                       <p>{"Year:"+this.state.year} </p>
                       <p>{"Language:"+this.state.language} </p>
                       <p>{"Country:"+this.state.country} </p>
                       <p>{this.state.rating >=7 ?"BoxOffice:"+ "Hit" : "BoxOffice:"+"Flop"} </p>
                     </div>
                  </div>
                  <p className="plot">{"About :"+this.state.plot} </p>
              </div>
          </div>
      </div>
  )
   }
}

export default Favarite
