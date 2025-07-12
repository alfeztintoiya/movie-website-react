# 🎬 Movie Discovery Website

A modern, responsive movie discovery website built with React and Vite. This project showcases fundamental React concepts and modern web development practices by integrating with The Movie Database (TMDB) API and Appwrite for backend services.

![Movie Website](public/hero-img.png)

## 🚀 Live Demo

[View Live Demo](#) <!-- Add your deployment link here -->

## 📋 Table of Contents

- [Features](#features)
- [React Concepts Used](#react-concepts-used)
- [Technologies & Tools](#technologies--tools)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- 🔍 **Movie Search**: Real-time movie search with debounced input
- 🎭 **Movie Details Modal**: Comprehensive movie information display
- 📈 **Trending Movies**: Horizontal scrollable trending movies section
- 🎨 **Modern UI**: Beautiful gradient designs and responsive layout
- ⚡ **Fast Loading**: Optimized with Vite for quick development and builds
- 📱 **Responsive Design**: Works seamlessly on all device sizes
- 🗄️ **Backend Integration**: Search analytics with Appwrite database
- 🎯 **Loading States**: Smooth loading animations and spinners

## 🧠 React Concepts Used

This project demonstrates essential React concepts perfect for learning:

### Core React Concepts

- **Components**: Functional components with modern React patterns
- **JSX**: JavaScript XML syntax for component rendering
- **Props**: Data passing between parent and child components
- **State Management**: Local state with `useState` hook
- **Event Handling**: Click events, form handling, and user interactions

### React Hooks

- **useState**: Managing component state (search terms, movies, loading states)
- **useEffect**: Side effects for API calls and lifecycle management
- **Custom Hooks**: Using `useDebounce` from react-use library

### Advanced Patterns

- **Conditional Rendering**: Dynamic content display based on state
- **Lists and Keys**: Rendering movie lists with proper key props
- **Event Propagation**: Handling modal clicks with `stopPropagation`
- **Async/Await**: Modern JavaScript for API calls
- **Error Handling**: Try-catch blocks for robust error management

### Component Communication

- **Props Drilling**: Passing data and functions between components
- **Callback Props**: Child-to-parent communication via function props
- **Component Composition**: Building complex UIs from simple components

## 🛠️ Technologies & Tools

### Frontend

- **React 19.1.0** - JavaScript library for building user interfaces
- **Vite 7.0.3** - Next generation frontend build tool
- **TailwindCSS 4.1.11** - Utility-first CSS framework
- **React-Use 17.6.0** - Collection of React hooks

### Backend & APIs

- **Appwrite 18.1.1** - Backend-as-a-Service for database operations
- **TMDB API** - The Movie Database API for movie data
- **Environment Variables** - Secure API key management

### Development Tools

- **ESLint** - Code linting and formatting
- **Vite Plugin React** - React support for Vite
- **Modern JavaScript (ES6+)** - Latest JavaScript features

## 📁 Project Structure

```
movie_website/
├── public/
│   ├── BG.png              # Background pattern image
│   ├── hero-img.png        # Hero section image
│   ├── logo.png            # Application logo
│   ├── No-Poster.png       # Fallback movie poster
│   ├── Rating.svg          # Star rating icon
│   └── search.png          # Search icon
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx   # Individual movie card component
│   │   ├── MovieDetails.jsx # Movie details modal component
│   │   ├── Search.jsx      # Search input component
│   │   └── Spinner.jsx     # Loading spinner component
│   ├── App.jsx             # Main application component
│   ├── App.css             # Component-specific styles
│   ├── index.css           # Global styles and Tailwind
│   ├── main.jsx            # Application entry point
│   └── appwrite.js         # Appwrite configuration and functions
├── .env                    # Environment variables
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
└── eslint.config.js        # ESLint configuration
```

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/alfeztintoiya/movie-website-react.git
   cd movie_website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🌍 Environment Variables

Create a `.env` file in the root directory:

```env
# TMDB API Configuration
VITE_TMDB_API_KEY=your_tmdb_api_key_here

# Appwrite Configuration
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

### Getting API Keys

1. **TMDB API Key**:

   - Visit [TMDB](https://www.themoviedb.org/)
   - Create an account and request API access
   - Get your API key from the settings

2. **Appwrite Setup**:
   - Visit [Appwrite Cloud](https://cloud.appwrite.io/)
   - Create a project and database
   - Set up a collection for search analytics

## 🎯 Usage

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Key Features Usage

1. **Search Movies**: Type in the search bar to find movies
2. **View Details**: Click on any movie card to see detailed information
3. **Browse Trending**: Scroll through the trending movies section
4. **Responsive Design**: Use on any device size

## 🔌 API Integration

### TMDB API Endpoints Used

- **Search Movies**: `/search/movie`
- **Discover Movies**: `/discover/movie`
- **Movie Details**: `/movie/{id}`
- **Trending Movies**: Data cached in Appwrite

### Appwrite Database

- **Search Analytics**: Tracks popular search terms
- **Movie Caching**: Stores trending movie data
- **User Engagement**: Monitors search patterns

## 🎨 Styling Approach

- **TailwindCSS**: Utility-first CSS framework
- **Custom Components**: Reusable styled components
- **Responsive Design**: Mobile-first approach
- **Modern Gradients**: Beautiful color schemes
- **Animations**: Smooth transitions and loading states

## 📚 Learning Outcomes

By studying this project, you'll understand:

- How to structure a React application
- Component-based architecture
- State management with hooks
- API integration and error handling
- Modern CSS with TailwindCSS
- Build tools and development workflow
- Environment variable management
- Responsive web design principles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [Appwrite](https://appwrite.io/) for backend services
- [TailwindCSS](https://tailwindcss.com/) for the amazing utility classes
- [Vite](https://vitejs.dev/) for the blazing fast build tool

## 📧 Contact

**Alfez Tintoiya**

- [GitHub Profile](https://github.com/alfeztintoiya)
- [LinkedIn Profile](https://linkedin.com/in/alfeztintoiya)

---

⭐ If you found this project helpful, please give it a star on GitHub!
