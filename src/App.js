import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';


function App() {

  const movies = [
    {
      name: "Oppenheimer",
      year: "2023",
      rating: "R",
      image: "https://movies.universalpictures.com/media/opr-tsr1sheet3-look2-rgb-3-1-1-64545c0d15f1e-1.jpg"

    },
    {
      name: "Barbie",
      year: "2023",
      rating: "R",
      image: "https://deadline.com/wp-content/uploads/2023/04/barbie-BARBIE_VERT_TSR_W_TALENT_2764x4096_DOM_rgb.jpg?w=800"

    },
    {
      name: "Prisoners",
      year: "2013",
      rating: "R",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8PEDPBL5ye4TLheBJMUHC0IPTwza5V99qtmJtseNQbsoIBK-W"

    },
    {
      name: "Inception",
      year: "2010",
      rating: "PG-13",
      image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"

    },
    {
      name: "Green Book",
      year: "2018",
      rating: "PG-13",
      image: "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_.jpg"

    },
  ]


  return (
    <div className="App">
          {movies.map((movie, index) => (
        <Movies
          key={index}
          name={movie.name}
          year={`Released In: ${movie.year}`}
          rating={`Rated ${movie.rating}`}
          alt={`Poster for ${movie.name}`}
          src={movie.image}
          width="200" // Set the desired width
          height="300" // Set the desired height
        />
      ))}
    </div>
  );
}

export default App;
