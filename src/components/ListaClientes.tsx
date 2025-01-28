// src/components/ListaClientes.tsx

import { Cliente } from '../types/Cliente';

interface ListaClientesProps {
  clientes: Cliente[];
  onEditar: (cliente: Cliente) => void;
  onEliminar: (clienteId: number) => void;
}

const ListaClientes: React.FC<ListaClientesProps> = ({ clientes, onEditar, onEliminar }) => {
  return (
    <div>
      <h2>Listado de Clientes</h2>
      {clientes.length === 0 ? (
        <p>No hay clientes registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.email}</td>
                <td>
                  <button onClick={() => onEditar(cliente)}>Editar</button>
                  <button
                    className="boton-eliminar"
                    onClick={() => onEliminar(cliente.id)}
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

export default ListaClientes;