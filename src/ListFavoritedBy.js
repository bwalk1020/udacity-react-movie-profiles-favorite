import React, {Component} from 'react';

class ListFavoritedBy extends Component {
  render() {
  	const moviesFavorited = this.props.moviesFavorited;
    
  	return (
     <div>
       {moviesFavorited.map(movie => (
        <div>
        <div>
          <h2>{movie.name}</h2>
          <p>Liked By:</p>
		</div>
      	<div>
         {movie.users.length ? 
      		<ul>{movie.users.map(user => (<li key={user.id}>{user.name}</li>))} </ul> : <li>no one </li>}
		</div>
		</div>
         ))}
    	</div>
    );
  }
}

export default ListFavoritedBy;