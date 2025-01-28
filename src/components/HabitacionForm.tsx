// src/components/HabitacionForm.tsx
import React, { useState, useEffect } from 'react';
import { Habitacion } from '../types/Habitacion';

interface HabitacionFormProps {
  habitacionActual?: Habitacion;
  onGuardar: (habitacion: Habitacion) => void;
}

const HabitacionForm: React.FC<HabitacionFormProps> = ({ habitacionActual, onGuardar }) => {
  const [tipo, setTipo] = useState('');
  const [precio, setPrecio] = useState('');

  useEffect(() => {
    if (habitacionActual) {
      setTipo(habitacionActual.tipo);
      setPrecio(habitacionActual.precio.toString());
    } else {
      setTipo('');
      setPrecio('');
    }
  }, [habitacionActual]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (tipo.trim() === '') {
      alert('El tipo de habitación no puede estar vacío');
      return;
    }

    const precioNumero = parseFloat(precio);
    if (isNaN(precioNumero) || precioNumero <= 0) {
      alert('El precio debe ser un número positivo');
      return;
    }

    const nuevaHabitacion: Habitacion = {
      id: habitacionActual ? habitacionActual.id : Date.now(),
      tipo,
      precio: precioNumero,
    };

    onGuardar(nuevaHabitacion);
    setTipo('');
    setPrecio('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{habitacionActual ? 'Editar Habitación' : 'Agregar Habitación'}</h2>
      <div>
        <label>Tipo de Habitación:</label><br/>
        <input
          type="text"
          placeholder="Ejemplo: Individual, Doble, Suite"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
      </div>
      <div>
        <label>Precio por Noche ($):</label><br/>
        <input
          type="number"
          placeholder="Ejemplo: 100"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          step="0.01"
        />
      </div>
      <button type="submit">{habitacionActual ? 'Actualizar' : 'Guardar'}</button>
    </form>
  );
};

export default HabitacionForm;