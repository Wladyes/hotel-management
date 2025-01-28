// src/components/ReservaForm.tsx
import React, { useState } from 'react';
import { Reserva } from '../types/Reserva';
import { Cliente } from '../types/Cliente';
import { Habitacion } from '../types/Habitacion';

interface ReservaFormProps {
  clientes: Cliente[];
  habitaciones: Habitacion[];
  reservasExistentes: Reserva[];
  onGuardar: (reserva: Reserva) => void;
}

const ReservaForm: React.FC<ReservaFormProps> = ({
  clientes,
  habitaciones,
  reservasExistentes,
  onGuardar,
}) => {
  const [clienteId, setClienteId] = useState<number | undefined>(undefined);
  const [habitacionIds, setHabitacionIds] = useState<number[]>([]);
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (clienteId === undefined) {
      alert('Debes seleccionar un cliente');
      return;
    }

    if (habitacionIds.length === 0) {
      alert('Debes seleccionar al menos una habitación');
      return;
    }

    if (!fechaInicio || !fechaFin) {
      alert('Debes seleccionar las fechas de inicio y fin');
      return;
    }

    if (new Date(fechaFin) <= new Date(fechaInicio)) {
      alert('La fecha de fin debe ser posterior a la fecha de inicio');
      return;
    }

    // Verificar solapamiento de reservas para las habitaciones seleccionadas
    const haySolapamiento = reservasExistentes.some((reserva) => {
      const reservaInicio = new Date(reserva.fechaInicio);
      const reservaFin = new Date(reserva.fechaFin);
      const nuevaInicio = new Date(fechaInicio);
      const nuevaFin = new Date(fechaFin);

      const solapan =
        reserva.habitacionIds.some((id) => habitacionIds.includes(id)) &&
        ((nuevaInicio >= reservaInicio && nuevaInicio < reservaFin) ||
          (nuevaFin > reservaInicio && nuevaFin <= reservaFin) ||
          (nuevaInicio <= reservaInicio && nuevaFin >= reservaFin));

      return solapan;
    });

    if (haySolapamiento) {
      alert('Al menos una de las habitaciones seleccionadas ya está reservada en esas fechas');
      return;
    }

    const nuevaReserva: Reserva = {
      id: Date.now(),
      clienteId,
      habitacionIds,
      fechaInicio,
      fechaFin,
    };

    onGuardar(nuevaReserva);

    // Reiniciar formulario
    setClienteId(undefined);
    setHabitacionIds([]);
    setFechaInicio('');
    setFechaFin('');
  };

  const handleHabitacionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const selectedIds: number[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedIds.push(Number(options[i].value));
      }
    }
    setHabitacionIds(selectedIds);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Reserva</h2>
      <div>
        <label>Cliente:</label><br/>
        <select
          value={clienteId || ''}
          onChange={(e) => setClienteId(Number(e.target.value))}
        >
          <option value="" disabled>
            -- Selecciona un cliente --
          </option>
          {clientes.map((cliente) => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Habitaciones:</label><br/>
        <select
          multiple
          value={habitacionIds.map(String)}
          onChange={handleHabitacionChange}
        >
          {habitaciones.map((habitacion) => (
            <option key={habitacion.id} value={habitacion.id}>
              {habitacion.tipo} - ${habitacion.precio.toFixed(2)}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Fecha Inicio:</label><br/>
        <input
          type="date"
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
        />
      </div>
      <div>
        <label>Fecha Fin:</label><br/>
        <input
          type="date"
          value={fechaFin}
          onChange={(e) => setFechaFin(e.target.value)}
        />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default ReservaForm;