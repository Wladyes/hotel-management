// src/components/ClienteForm.tsx
import React, { useState, useEffect } from 'react';
import { Cliente } from '../types/Cliente';

interface ClienteFormProps {
  clienteActual?: Cliente;
  onGuardar: (cliente: Cliente) => void;
}

const ClienteForm: React.FC<ClienteFormProps> = ({ clienteActual, onGuardar }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (clienteActual) {
      setNombre(clienteActual.nombre);
      setEmail(clienteActual.email);
    } else {
      setNombre('');
      setEmail('');
    }
  }, [clienteActual]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación del nombre
    if (nombre.trim() === '') {
      alert('El nombre no puede estar vacío');
      return;
    }

    // Validación del email
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert('El correo electrónico no tiene un formato válido');
      return;
    }

    const nuevoCliente: Cliente = {
      id: clienteActual ? clienteActual.id : Date.now(),
      nombre,
      email,
    };

    onGuardar(nuevoCliente);
    setNombre('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{clienteActual ? 'Editar Cliente' : 'Agregar Cliente'}</h2>
      <div>
        <label>Nombre Completo:</label><br/>
        <input
          type="text"
          placeholder="Ingresar nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label>Correo Electrónico:</label><br/>
        <input
          type="email"
          placeholder="correo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">{clienteActual ? 'Actualizar' : 'Guardar'}</button>
    </form>
  );
};

export default ClienteForm;