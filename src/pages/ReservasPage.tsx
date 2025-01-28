// src/pages/ReservasPage.tsx

import { useState, useEffect } from 'react';
import { Reserva } from '../types/Reserva';
import { Cliente } from '../types/Cliente';
import { Habitacion } from '../types/Habitacion';
import ReservaForm from '../components/ReservaForm';
import ListaReservas from '../components/ListaReservas';

const ReservasPage: React.FC = () => {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [habitaciones, setHabitaciones] = useState<Habitacion[]>([]);
  const [datosCargados, setDatosCargados] = useState(false);

  // Cargar datos desde localStorage al montar el componente
  useEffect(() => {
    const reservasGuardadas = localStorage.getItem('reservas');
    if (reservasGuardadas) {
      setReservas(JSON.parse(reservasGuardadas));
    }

    const clientesGuardados = localStorage.getItem('clientes');
    if (clientesGuardados) {
      setClientes(JSON.parse(clientesGuardados));
    }

    const habitacionesGuardadas = localStorage.getItem('habitaciones');
    if (habitacionesGuardadas) {
      setHabitaciones(JSON.parse(habitacionesGuardadas));
    }

    setDatosCargados(true);
  }, []);

  // Guardar reservas en localStorage cuando cambien
  useEffect(() => {
    if (datosCargados) {
      localStorage.setItem('reservas', JSON.stringify(reservas));
    }
  }, [reservas, datosCargados]);

  const manejarGuardarReserva = (reserva: Reserva) => {
    setReservas([...reservas, reserva]);
  };

  const manejarEliminarReserva = (reservaId: number) => {
    const confirmacion = window.confirm('¿Estás seguro de que deseas cancelar esta reserva?');
    if (confirmacion) {
      const nuevasReservas = reservas.filter((reserva) => reserva.id !== reservaId);
      setReservas(nuevasReservas);
    }
  };

  return (
    <div className="contenedor">
      <ReservaForm
        clientes={clientes}
        habitaciones={habitaciones}
        reservasExistentes={reservas}
        onGuardar={manejarGuardarReserva}
      />
      <ListaReservas
        reservas={reservas}
        clientes={clientes}
        habitaciones={habitaciones}
        onEliminar={manejarEliminarReserva}
      />
    </div>
  );
};

export default ReservasPage;