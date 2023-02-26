// import PropTypes from 'prop-types';
import { StyledLink, MovieImg, MovieBox } from './Movie.styled';

function Movie({ movie, location }) {
  const { id, movieName, poster } = movie;

  let movieId = '';
  const page = location.state.page;

  switch (page) {
    case 'home':
      movieId = `/movies/${id}`;
      break;
    case 'movies':
      movieId = `${id}`;
      break;
    default:
      return;
  }

  return (
    <li>
      <StyledLink to={movieId} state={{ from: location }}>
        <MovieBox>
          <p>{movieName}</p>
          <MovieImg src={poster} alt="movieName" width="200px" />
        </MovieBox>
      </StyledLink>
    </li>
  );
}

export default Movie;

// Movie.propTypes = {
//   id: PropTypes.number.isRequired,
//   movieName: PropTypes.string.isRequired,
//   location: PropTypes.shape({
//     state: PropTypes.shape({
//       page: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };