import './App.css'
import MovieCard from './components/MovieCard'
import Header from './components/Header'
import FilterMovies from './components/FilterMovies'
import AddMovie from './components/AddMovie'

export default function App () {
  return (
    <div className='my-6'>
      <div>
        <Header title={"My Movie List"} subTitle={"A React Application for movie watch list managment!"}></Header>
      </div>
      <div className='grid grid-cols-2 justify-between mx-auto w-1/2 my-4'>
        <AddMovie />
        <span className='ml-auto'>
          <FilterMovies />
        </span>
      </div>
      <div className='grid grid-rows-2'>
        <MovieCard title={"Strange Things"} info={"This film was made perfectly"}></MovieCard>
      </div>
    </div>
  )
}