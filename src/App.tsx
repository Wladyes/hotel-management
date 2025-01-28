// src/App.tsx
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClientesPage from './pages/ClientesPage';
import HabitacionesPage from './pages/HabitacionesPage';
import ReservasPage from './pages/ReservasPage';

function App() {
  return (
    <div>
      {/* Menú de navegación */}
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/clientes">Clientes</Link></li>
          <li><Link to="/habitaciones">Habitaciones</Link></li>
          <li><Link to="/reservas">Reservas</Link></li>
        </ul>
      </nav>

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/habitaciones" element={<HabitacionesPage />} />
        <Route path="/reservas" element={<ReservasPage />} />
      </Routes>
    </div>
  );
}

export default App;