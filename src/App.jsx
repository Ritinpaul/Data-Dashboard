import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites';
import Search from './pages/Search.jsx';
import { ThemeProvider } from './context/ThemeContext'; 
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <ThemeProvider>  
    <FavoritesProvider>
      <Router>
        <div className="relative bg-white dark:bg-gray-900 min-h-screen">
          <Navbar />
          <Sidebar />
          <div className="pt-16 md:pl-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </div>
        </div>
      </Router>
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
