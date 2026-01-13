import './App.css'
import MovieCard from './components/MovieCard'
import Header from './components/Header'
import FilterMovies from './components/FilterMovies'
import AddMovie from './components/AddMovie'
import { useState } from 'react'

export default function App () {

  function createId() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  const [movies, setMovies] = useState([
    {
      id: createId(),
      title: "Strange Things",
      info: "This film was made perfectly",
      genre: "Drama"
    }
  ])

  function HandleAddMovie(newMovie) {
    setMovies(prevMovies => [...prevMovies, newMovie]);
  }

  function HandleDeleteMovie(id) {
    setMovies(prevMovies =>
      prevMovies.filter(movie => movie.id !== id)
    );
  }

  return (
    <div className='my-6'>
      <div>
        <Header title={"My Movie List"} subTitle={"A React Application for movie watch list managment!"}></Header>
      </div>
      <div className='grid grid-cols-2 justify-between mx-auto w-1/2 my-4'>
        <AddMovie onAddMovie={HandleAddMovie} />
        <span className='ml-auto'>
          <FilterMovies />
        </span>
      </div>
      <div className='grid grid-rows gap-4'>
        {movies.map(movie => (
          <MovieCard
            key={movie.id} 
            id={movie.id}
            title={movie.title}
            info={movie.info}
            genre={movie.genre}
            onDelete={HandleDeleteMovie}
          />
        ))}
      </div>
    </div>
  )
}