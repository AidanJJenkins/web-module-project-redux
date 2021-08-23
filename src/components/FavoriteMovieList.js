import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { removeFavorites } from '../actions/movieActions'

import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    const favorites = props.favorites;
    const { push } = useHistory()

    
    const handleRemoveFavorite = (id) => {
        console.log("this is the id:",id)
        props.removeFavorites(id)
        push('/movies')
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={() => handleRemoveFavorite(movie.id)} class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}


const mapStateToProps = state => {
    console.log(state)
    return {
        favorites: state.favorites.favorites
    }
} 

export default connect(mapStateToProps, {removeFavorites}) (FavoriteMovieList);