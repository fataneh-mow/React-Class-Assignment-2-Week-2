import './App.css'
import MovieCard from './components/MovieCard'
import Header from './components/Header'

export default function App () {
  return (
    <div className='my-6'>
      <Header title={"My Movie List"} subTitle={"A React Application for movie watch list managment!"}></Header>
      <MovieCard title={"Strange Things"} info={"This film was made perfectly"}></MovieCard>
    </div>
  )
}