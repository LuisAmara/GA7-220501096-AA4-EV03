import React from "react";
import appFirebase from "../Credenciales";
import { getAuth, signOut } from "firebase/auth";
import ImagePan from "../assets/Pan - Home.png";
import ImageBebidas from "../assets/Bebidas - Home.png";
import ImageLimpieza from "../assets/Limpieza - Home.png";
const auth = getAuth(appFirebase);

const Home = ({ correoUsuario, isAdmin }) => {

  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log("Sesión cerrada correctamente");
    }).catch((error) => {
      console.error("Error al cerrar sesión", error);
    });
  };

  return (
    <div className="container">
      <h2 className="text-center">
        Bienvenido, {correoUsuario} 
        <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
      </h2>

      {/* Mostrar contenido específico dependiendo del rol del usuario */}
      {isAdmin ? (
        <div>
          <h3>Contenido para Administradores</h3>
          <p>Como administrador, puedes acceder a más opciones como gestionar usuarios, productos, etc.</p>
        </div>
      ) : (
        <div>
          <h3>Productos disponibles</h3>
          <div className="productos">
            {/* Aquí puedes mostrar productos aleatorios o cualquier contenido para usuarios normales */}
            <div className="image">
            <img src={ImagePan} alt="" />
            <p>Panaderia</p>
            </div>
            <div className="image">
            <img src={ImageBebidas} alt="" />
            <p>Bebidas</p>
            </div>
            <div className="image">
            <img src={ImageLimpieza} alt="" />
            <p>Limpieza</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

