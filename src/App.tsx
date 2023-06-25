import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Games from './pages/games';
import Home from './pages/home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games-list" element={<Games />} />
        <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
