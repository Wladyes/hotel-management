// src/components/ListaHabitaciones.tsx
import React from 'react';
import { Habitacion } from '../types/Habitacion';

interface ListaHabitacionesProps {
  habitaciones: Habitacion[];
  onEditar: (habitacion: Habitacion) => void;
}

const ListaHabitaciones: React.FC<ListaHabitacionesProps> = ({ habitaciones, onEditar }) => {
  return (
    <div>
      <h2>Listado de Habitaciones</h2>
      {habitaciones.length === 0 ? (
        <p>No hay habitaciones registradas.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo</th>
              <th>Precio por Noche ($)</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {habitaciones.map((habitacion) => (
              <tr key={habitacion.id}>
                <td>{habitacion.id}</td>
                <td>{habitacion.tipo}</td>
                <td>{habitacion.precio.toFixed(2)}</td>
                <td>
                  <button onClick={() => onEditar(habitacion)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListaHabitaciones;