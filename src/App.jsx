import { useState } from 'react'

// IMPORTANDO MODULOS DE FIREBASE
import appFirebase from "../src/Credenciales"
import { getAuth, onAuthStateChanged } from "firebase/auth"
const auth = getAuth(appFirebase)

// IMPORTANDO LOS COMPONENTES 
import Login from "../src/Components/Login";
import Home from "../src/Components/Home";

import './App.css'

function App() {
 
  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged  (auth, (usuarioFirebase)=> {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    }
    else
    {
      setUsuario(null)
    }
  })

  
  return (
    <div>

      {usuario ? <Home correoUsuario = {usuario.email}   /> : <Login/>}




    </div>
  )
}

export default App
