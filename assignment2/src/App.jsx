import './App.css'
import MovieCard from './components/MovieCard'

export default function App () {
  return (
    <div className='my-12'>
      <MovieCard title={"Strange Things"} info={"This film was made perfectly"}></MovieCard>
    </div>
  )
}