import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { deletemovie } from '../JS/Actions/MovieActions';

function MovieCard({movie}) {
  const disptach=useDispatch()
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>Title: {movie.title}</Card.Title>
        <Card.Text>Description: {movie.description}</Card.Text>
        <Card.Text>Description: {movie.rate}</Card.Text>
        <Button onClick={movie.trailer} variant="primary">Trailer</Button>
        <Button onClick={()=> disptach(deletemovie(movie.id))} variant="primary">Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;