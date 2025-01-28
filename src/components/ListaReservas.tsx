// src/components/ListaReservas.tsx

import { Reserva } from '../types/Reserva';
import { Cliente } from '../types/Cliente';
import { Habitacion } from '../types/Habitacion';

interface ListaReservasProps {
  reservas: Reserva[];
  clientes: Cliente[];
  habitaciones: Habitacion[];
  onEliminar: (reservaId: number) => void;
}

const ListaReservas: React.FC<ListaReservasProps> = ({
  reservas,
  clientes,
  habitaciones,
  onEliminar,
}) => {
  const obtenerNombreCliente = (clienteId: number) => {
    const cliente = clientes.find((c) => c.id === clienteId);
    return cliente ? cliente.nombre : 'Desconocido';
  };

  const obtenerHabitaciones = (habitacionIds: number[]) => {
    return habitacionIds
      .map((id) => {
        const habitacion = habitaciones.find((h) => h.id === id);
        return habitacion ? habitacion.tipo : 'Desconocida';
      })
      .join(', ');
  };

  return (
    <div>
      <h2>Listado de Reservas</h2>
      {reservas.length === 0 ? (
        <p>No hay reservas registradas.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID Reserva</th>
              <th>Cliente</th>
              <th>Habitaciones</th>
              <th>Fecha Inicio</th>
              <th>Fecha Fin</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva.id}>
                <td>{reserva.id}</td>
                <td>{obtenerNombreCliente(reserva.clienteId)}</td>
                <td>{obtenerHabitaciones(reserva.habitacionIds)}</td>
                <td>{reserva.fechaInicio}</td>
                <td>{reserva.fechaFin}</td>
                <td>
                  <button
                    className="boton-eliminar"
                    onClick={() => onEliminar(reserva.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaReservas;