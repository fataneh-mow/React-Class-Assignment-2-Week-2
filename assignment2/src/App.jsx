import './App.css'
import MovieCard from './components/MovieCard'
import Header from './components/Header'
import FilterMovies from './components/FilterMovies'
import AddMovie from './components/AddMovie'
import MovieStatus from './components/MovieStatus'
import { useState } from 'react'

export default function App () {
  const [movies, setMovies] = useState([
    {
      id: createId(),
      title: "Strange Things",
      info: "This film was made perfectly",
      genre: "Drama",
      watched: false
    }
  ])
  
  const [filter, setFilter] = useState("All")
  
  const wathcedCount = movies.filter(movie => movie.watched).length
  const unwatchedCount = movies.filter(movie => !movie.watched).length
  const totalCount = movies.length

  function createId() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function HandleAddMovie(newMovie) {
    setMovies(prevMovies => [...prevMovies, newMovie]);
  }

  function HandleDeleteMovie(id) {
    setMovies(prevMovies =>
      prevMovies.filter(movie => movie.id !== id)
    );
  }

  function handleMarkWatched(id) {
    setMovies(prev =>
      prev.map(movie =>
        movie.id === id
          ? { ...movie, watched: true }
          : movie
      )
    );
  }

  const filteredMovies = movies.filter(movie => {
    if (filter === "watched") return movie.watched;
    if (filter === "unwatched") return !movie.watched;
    return true;
  });

  return (
    <div className='my-6'>
      <div>
        <Header title={"My Movie List"} subTitle={"A React Application for movie watch list managment!"}></Header>
      </div>
      <div className='grid grid-cols-2 justify-between mx-auto w-1/2 my-4'>
        <AddMovie onAddMovie={HandleAddMovie} />
        <span className='ml-auto'>
          <FilterMovies filter={filter} setFilter={setFilter} />
        </span>
      </div>
      <div className='my-4'>
        <MovieStatus watchedCount={wathcedCount} unwathcedCount={unwatchedCount} totalCount={totalCount} />
      </div>
      <div className='grid grid-rows gap-4'>
        {filteredMovies.length === 0 ? (
          <h2 className="text-center text-red-600 text-2xl mt-4">
            No movies found!
          </h2>
        ) : (
          filteredMovies.map(movie => (
            <MovieCard
              key={movie.id}
              {...movie}
              onDelete={HandleDeleteMovie}
              onWatch={handleMarkWatched}
            />
          ))
        )}
      </div>
    </div>
  )
}