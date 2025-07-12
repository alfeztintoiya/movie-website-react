import React, { useState , useEffect, use} from 'react'
import Search from './components/Search'
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import MovieDetails from './components/MovieDetails';
import { useDebounce } from 'react-use';
import { getTrandingMovies, updateSearchCount } from './appwrite';

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers:{
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}
const App = () => {
  const [SearchTerm, setSearchTerm] = useState('');
  const [errorMessage,setErrorMessage] = useState('');
  const [MoviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [TrendingMovies, setTrendingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  useDebounce(() => {
    setDebouncedSearchTerm(SearchTerm);
  }, 500, [SearchTerm]);
  
  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const endpoint = query 
      ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      :`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint,API_OPTIONS);
      
      if(!response.ok){
        throw new Error(`Failed to fetch movies`);
      }

      const data = await response.json();
      if(data.response=="false"){
        throw new Error('No movies found');
        setMoviesList([]);
        return;
      }
      console.log(data);
      setMoviesList(data.results || []);

      if(query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.log(`Error Fetching Movies: ${error}`);
      setErrorMessage('Error Fetching Movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrandingMovies();
      console.log('Trending Movies:', movies);
      setTrendingMovies(movies);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  };

  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/movie/${movieId}?append_to_response=credits`,
        API_OPTIONS
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return null;
    }
  };

  const handleMovieClick = async (movie) => {
    setSelectedMovie(movie);
    setMovieDetails(null); // Reset previous details
    setIsLoadingDetails(true);
    
    const details = await fetchMovieDetails(movie.id);
    if (details) {
      setMovieDetails(details);
    }
    setIsLoadingDetails(false);
  };

  const closeMovieDetails = () => {
    setSelectedMovie(null);
    setMovieDetails(null);
    setIsLoadingDetails(false);
  };

  useEffect(()=>{
    fetchMovies(debouncedSearchTerm);
  },[debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <main>
      <div className='pattern'/>

      <div className='wrapper'>
        <header>
          <h1 className="website-title">
            <span className="text-gradient">Movie</span>Matrix
          </h1>
          <img src='/hero-img.png' alt='Hero Banner'/>
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
        </header>

        <Search searchTerm={SearchTerm} setSearchTerm={setSearchTerm}/>

        
        <section className='all-movies'>
          <h2>All Movies</h2>
          {TrendingMovies.length > 0 && (
            <section className='trending'>
              <h2>Trending Movies</h2>

              <ul>
                {TrendingMovies.map((movie, index) => (
                  !movie.adult && (
                    <li key={movie.$id} onClick={() => handleMovieClick({ id: movie.movie_id, ...movie })}>
                      <p>{index+1}</p>
                      <img src={movie.poster_url} alt={movie.title}/>
                    </li>
                  )
                ))}
              </ul>
            </section>
          )}
          {isLoading ? (
            <Spinner/>
          ): errorMessage ? (
            <p className='text-red-500'>{errorMessage}</p>
          ) : (
            <ul>
              {MoviesList.map((movie) => (
                <MovieCard 
                  key={movie.id} 
                  movie={movie} 
                  onMovieClick={handleMovieClick}
                />
              ))}
            </ul>
          )}
        </section>
      </div>

      {selectedMovie && (
        <MovieDetails 
          movie={movieDetails || selectedMovie} 
          onClose={closeMovieDetails}
          isLoading={isLoadingDetails}
        />
      )}
    </main>
  )
}

export default App