import React, { useState } from "react";
import ImageLogin from "../assets/Imagen - Login1.jpg";
import ImagePerson from "../assets/Imagen - Person.png";

import appFirebase from "../Credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase);

const Login = ({ setUsuario }) => {
  const [Registrado, setRegistrado] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState("");  // Nuevo estado para el tipo de usuario

  const functAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const Contraseña = e.target.password.value;

    // Verificamos si el usuario seleccionó un tipo de cuenta
    if (!tipoUsuario) {
      alert("Por favor selecciona un tipo de usuario (Administrador o Usuario)");
      return;
    }

    try {
      if (Registrado) {
        // Registrar nuevo usuario
        await createUserWithEmailAndPassword(auth, correo, Contraseña);
        // Asumimos que todos los registros son usuarios normales por defecto
        setUsuario({ email: correo, isAdmin: tipoUsuario === "admin" });
      } else {
        // Iniciar sesión
        await signInWithEmailAndPassword(auth, correo, Contraseña);
        setUsuario({ email: correo, isAdmin: tipoUsuario === "admin" });
      }
    } catch (error) {
      alert(Registrado ? "Error al registrar usuario" : "El correo o la contraseña son incorrectos");
    }
  };

  return (
    <div className='Container'>
      <div className="row">
        {/* Columna más pequeña (formulario) */}
        <div className="col-md-4">
          <div className="padre">
            <div className="card card-body shadow-lg">
              <img src={ImagePerson} alt="" className="estilo-profile" />
              <form onSubmit={functAutenticacion}>
                <input type="text" placeholder="Ingresar Correo" className="Cajatexto" id="email" />
                <input type="password" placeholder="Ingresar Contraseña" className="Cajatexto" id="password" />

                {/* Selección del tipo de usuario */}
                <div className="tipo-usuario">
                  <label>
                    <input
                      type="radio"
                      name="tipoUsuario"
                      value="user"
                      checked={tipoUsuario === "user"}
                      onChange={() => setTipoUsuario("user")}
                    />
                    Usuario
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="tipoUsuario"
                      value="admin"
                      checked={tipoUsuario === "admin"}
                      onChange={() => setTipoUsuario("admin")}
                    />
                    Administrador
                  </label>
                </div>

                <button className="Cajaboton"> {Registrado ? "Registrarse" : "Iniciar sesión"} </button>
              </form>
              <h4 className="texto">
                {Registrado ? "Ya tienes cuenta" : "No tienes cuenta"}
                <button className="btnSwicth" onClick={() => setRegistrado(!Registrado)}>
                  {Registrado ? "Inicia sesión" : "Regístrate"}
                </button>
              </h4>
            </div>
          </div>
        </div>

        {/* Columna más grande (imagen de fondo) */}
        <div className="col-md-8">
          <img src={ImageLogin} alt="" className="tamaño-imagen" />
        </div>
      </div>
    </div>
  );
};

export default Login;
