import React, { useState } from "react"
import ImageLogin from "../assets/Imagen - Login1.jpg"
import ImagePerson from "../assets/Imagen - Person.png";

import appFirebase from "../Credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase)

const Login = () => {

    const [Registrado, setRegistrado] = useState(false)

    const functAutenticacion = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const Contraseña = e.target.password.value;

        if (Registrado) {
           try {
            await createUserWithEmailAndPassword(auth, correo, Contraseña)
           } catch (error) {
            alert("Debe asegurarse de que la contraseña contenga mas de 8 caracteres")
           }
        }
        else {
            try {
                await signInWithEmailAndPassword(auth, correo, Contraseña)
            } catch (error) {
                alert("El correo o contraseña son incorrectos")
            }
            
        }

    }

    return (
        <div className='Container'>
            <div className="row">
                {/* Columna mas pequeña formulario */}
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src={ImagePerson} alt="" className="estilo-profile" />
                            <form onSubmit={functAutenticacion}>
                                <input type="text" placeholder="Ingresar Correo" className="Cajatexto" id="email" />
                                <input type="password" placeholder="Ingresar Contraseña" className="Cajatexto" id="password" />
                                <button className="Cajaboton"> {Registrado ? "Registrarse" : "Iniciar sesion"} </button>
                            </form>
                            <h4 className="texto">{Registrado ? "ya tienes cuenta" : "No tienes cuenta"}<button className="btnSwicth" onClick={() => setRegistrado(!Registrado)} >{Registrado ? "Inicia sesion" : "Registrate"}</button></h4>
                        </div>
                    </div>

                </div>
                {/* Columna mas grande formulario */}
                <div className="col-md-8">
                    <img src={ImageLogin} alt="" className="tamaño-imagen" />

                </div>
            </div>
        </div>
    )
}

export default Login