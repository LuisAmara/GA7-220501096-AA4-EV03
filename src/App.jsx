import { useState, useEffect } from 'react';

// IMPORTANDO MODULOS DE FIREBASE
import appFirebase from "../src/Credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);

// IMPORTANDO LOS COMPONENTES
import Login from "../src/Components/Login";
import Home from "../src/Components/Home";
import TablaUsuarios from "../src/Components/TablaUsuarios";

import './App.css';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [currentPage, setCurrentPage] = useState('home'); // Estado para controlar la página actual

  // Efecto para manejar la autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        const isAdmin = usuarioFirebase.email === "admin@example.com"; // Simulación de administrador
        setUsuario({
          email: usuarioFirebase.email,
          isAdmin: isAdmin,
        });
      } else {
        setUsuario(null);
      }
    });

    return () => unsubscribe(); // Limpiar suscripción al desmontar
  }, []);

  const handleNavigation = (page) => {
    setCurrentPage(page); // Cambia la página actual según el enlace o acción
  };

  return (
    <div className="App">
      {/* Navegación simple utilizando botones o enlaces */}
      <nav>
        <button onClick={() => handleNavigation('home')} className="btn btn-primary">
          Volver al Home
        </button>
        {usuario && usuario.isAdmin && (
          <button onClick={() => handleNavigation('tabla-usuarios')} className="btn btn-primary">
            Ver Tabla de Usuarios
          </button>
        )}
        {!usuario && (
          <button onClick={() => handleNavigation('login')} className="btn btn-primary">
            Iniciar sesión
          </button>
        )}
      </nav>

      {/* Renderización de la página actual */}
      {currentPage === 'home' && usuario ? (
        <Home correoUsuario={usuario.email} isAdmin={usuario.isAdmin} />
      ) : currentPage === 'login' ? (
        <Login setUsuario={setUsuario} />
      ) : currentPage === 'tabla-usuarios' && usuario?.isAdmin ? (
        <TablaUsuarios />
      ) : (
        <Home correoUsuario={usuario?.email} isAdmin={usuario?.isAdmin} />
      )}
    </div>
  );
}

export default App;
