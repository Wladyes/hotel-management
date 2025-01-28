// src/pages/HabitacionesPage.tsx

import { useState, useEffect } from 'react';
import { Habitacion } from '../types/Habitacion';
import HabitacionForm from '../components/HabitacionForm';
import ListaHabitaciones from '../components/ListaHabitaciones';

const HabitacionesPage: React.FC = () => {
  const [habitaciones, setHabitaciones] = useState<Habitacion[]>([]);
  const [habitacionActual, setHabitacionActual] = useState<Habitacion | undefined>(undefined);
  const [datosCargados, setDatosCargados] = useState(false);

  // Cargar habitaciones desde localStorage al montar el componente
  useEffect(() => {
    const habitacionesGuardadas = localStorage.getItem('habitaciones');
    if (habitacionesGuardadas) {
      setHabitaciones(JSON.parse(habitacionesGuardadas));
    }
    setDatosCargados(true);
  }, []);

  // Guardar habitaciones en localStorage cuando cambien
  useEffect(() => {
    if (datosCargados) {
      localStorage.setItem('habitaciones', JSON.stringify(habitaciones));
    }
  }, [habitaciones, datosCargados]);

  const manejarGuardarHabitacion = (habitacion: Habitacion) => {
    if (habitacionActual) {
      // Editar habitación existente
      setHabitaciones(habitaciones.map(h => h.id === habitacion.id ? habitacion : h));
    } else {
      // Agregar nueva habitación
      setHabitaciones([...habitaciones, habitacion]);
    }
    setHabitacionActual(undefined);
  };

  const manejarEditarHabitacion = (habitacion: Habitacion) => {
    setHabitacionActual(habitacion);
  };

  return (
    <div className="contenedor">
      <HabitacionForm
        habitacionActual={habitacionActual}
        onGuardar={manejarGuardarHabitacion}
      />
      <ListaHabitaciones
        habitaciones={habitaciones}
        onEditar={manejarEditarHabitacion}
      />
    </div>
  );
};

export default HabitacionesPage;