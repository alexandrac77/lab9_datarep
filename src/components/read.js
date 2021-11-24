import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

class Read extends Component
{

    constructor(){
        super()
        //bind
        this.reloadData=this.reloadData.bind(this)

    }

    //get new information from server //invoked by button click
    reloadData(){
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({mymovies: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    //lifecycle hook
    componentDidMount(){
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({mymovies: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    state = {
        mymovies: []            
    };

    render(){
        return(
            <div>
                <h1>This is my Read component!</h1>
                {/* pass to movies which passes to movie item*/}
                <Movies films={this.state.mymovies} reloadData={this.reloadData}></Movies>
            </div>
        );
    }
}
export default Read;