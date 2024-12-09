import React from 'react';

const TablaUsuarios = () => {
  // Lista simulada de usuarios (en una app real deberías obtenerla de la base de datos)
  const usuarios = [
    { id: 1, nombre: 'Juan Pérez', correo: 'juan@ejemplo.com', rol: 'usuario' },
    { id: 2, nombre: 'Ana Gómez', correo: 'ana@ejemplo.com', rol: 'usuario' },
    { id: 3, nombre: 'Carlos Sánchez', correo: 'carlos@ejemplo.com', rol: 'usuario' },
    { id: 4, nombre: 'Admin Test', correo: 'admin@example.com', rol: 'administrador' },
  ];

  return (
    <div className="container">
      <h2 className="text-center">Lista de Usuarios Registrados</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
      <a href="/Home" className="btn btn-primary">Volver al Home</a>
    </div>
  );
};

export default TablaUsuarios;
