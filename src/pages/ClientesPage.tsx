// src/pages/ClientesPage.tsx

import { useState, useEffect } from 'react';
import { Cliente } from '../types/Cliente';
import ClienteForm from '../components/ClienteForm';
import ListaClientes from '../components/ListaClientes';

const ClientesPage: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [clienteActual, setClienteActual] = useState<Cliente | undefined>(undefined);
  const [datosCargados, setDatosCargados] = useState(false);

  // Cargar clientes desde localStorage al montar el componente
  useEffect(() => {
    const clientesGuardados = localStorage.getItem('clientes');
    if (clientesGuardados) {
      setClientes(JSON.parse(clientesGuardados));
    }
    setDatosCargados(true);
  }, []);

  // Guardar clientes en localStorage cuando cambien
  useEffect(() => {
    if (datosCargados) {
      localStorage.setItem('clientes', JSON.stringify(clientes));
    }
  }, [clientes, datosCargados]);

  const manejarGuardarCliente = (cliente: Cliente) => {
    if (clienteActual) {
      // Editar cliente existente
      setClientes(clientes.map(c => c.id === cliente.id ? cliente : c));
    } else {
      // Agregar nuevo cliente
      setClientes([...clientes, cliente]);
    }
    setClienteActual(undefined);
  };

  const manejarEditarCliente = (cliente: Cliente) => {
    setClienteActual(cliente);
  };

  const manejarEliminarCliente = (clienteId: number) => {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este cliente?');
    if (confirmacion) {
      const nuevosClientes = clientes.filter((cliente) => cliente.id !== clienteId);
      setClientes(nuevosClientes);
    }
  };

  return (
    <div className="contenedor">
      <ClienteForm
        clienteActual={clienteActual}
        onGuardar={manejarGuardarCliente}
      />
      <ListaClientes
        clientes={clientes}
        onEditar={manejarEditarCliente}
        onEliminar={manejarEliminarCliente} // Pasar la función al componente
      />
    </div>
  );
};

export default ClientesPage;