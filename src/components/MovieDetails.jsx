import React from 'react';
import Spinner from './Spinner';

const MovieDetails = ({ movie, onClose, isLoading }) => {
  if (!movie) return null;

  const formatCurrency = (amount) => {
    if (!amount) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatRevenue = (amount) => {
    if (!amount) return 'N/A';
    if (amount >= 1000000000) {
      return `$${(amount / 1000000000).toFixed(1)}B`;
    } else if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(0)}M`;
    }
    return formatCurrency(amount);
  };

  return (
    <div className="movie-details-overlay" onClick={onClose}>
      <div className="movie-details-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        
        {isLoading ? (
          <div className="movie-details-loading">
            <Spinner />
            <p>Loading movie details...</p>
          </div>
        ) : (
          <div className="movie-details-content">
            <div className="movie-poster-section">
              <img 
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'public/No-Poster.png'}
                alt={movie.title}
                className="movie-poster-large"
              />
            </div>
          
          <div className="movie-info-section">
            <div className="movie-header">
              <h1 className="movie-title">{movie.title}</h1>
              <div className="movie-meta">
                <span className="year">{movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}</span>
                <span>•</span>
                <span className="rating-badge">PG-13</span>
                <span>•</span>
                <span className="duration">{movie.runtime ? `${movie.runtime}m` : 'N/A'}</span>
              </div>
              
              <div className="movie-rating">
                <img src="public/Rating.svg" alt="star" />
                <span className="rating-score">{movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}</span>
                <span className="rating-count">({movie.vote_count || 0})</span>
              </div>
            </div>
            
            <div className="movie-genres">
              {movie.genres && movie.genres.map((genre) => (
                <span key={genre.id} className="genre-tag">{genre.name}</span>
              ))}
            </div>
            
            <div className="movie-details-grid">
              <div className="detail-section">
                <h3>Overview</h3>
                <p>{movie.overview || 'No overview available.'}</p>
              </div>
              
              <div className="detail-section">
                <h3>Release date</h3>
                <p>{movie.release_date ? new Date(movie.release_date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                }) : 'N/A'}</p>
              </div>
              
              <div className="detail-section">
                <h3>Countries</h3>
                <p>{movie.production_countries && movie.production_countries.length > 0 
                  ? movie.production_countries.map(country => country.name).join(' • ') 
                  : 'N/A'}</p>
              </div>
              
              <div className="detail-section">
                <h3>Status</h3>
                <p>{movie.status || 'Released'}</p>
              </div>
              
              <div className="detail-section">
                <h3>Language</h3>
                <p>{movie.spoken_languages && movie.spoken_languages.length > 0
                  ? movie.spoken_languages.map(lang => lang.english_name).join(' • ')
                  : movie.original_language}</p>
              </div>
              
              <div className="detail-section">
                <h3>Budget</h3>
                <p>{formatCurrency(movie.budget)}</p>
              </div>
              
              <div className="detail-section">
                <h3>Revenue</h3>
                <p>{formatRevenue(movie.revenue)}</p>
              </div>
              
              <div className="detail-section">
                <h3>Tagline</h3>
                <p>{movie.tagline || 'N/A'}</p>
              </div>
              
              <div className="detail-section production-companies">
                <h3>Production Companies</h3>
                <div className="companies-list">
                  {movie.production_companies && movie.production_companies.length > 0
                    ? movie.production_companies.map((company) => (
                        <span key={company.id} className="company">
                          {company.name}
                        </span>
                      ))
                    : <p>N/A</p>
                  }
                </div>
              </div>
            </div>
            
            <button className="visit-homepage" onClick={onClose}>
              Visit Homepage →
            </button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
