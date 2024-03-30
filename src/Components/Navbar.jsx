import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const [theme,settheme] = useState("light")
  useEffect(()=>{
   if(theme === "dark")
   {document.querySelector('html').classList.add('dark')}else{
    {document.querySelector('html').classList.remove('dark')}
   }
  },[theme])
  const cambiartema = ()  => {
   settheme(prevthem => prevthem === "light" ? "dark" : "light")
  }
  console.log(cambiartema);
  return (
    <nav>
      <Link to = '/'>Home</Link>
      <Link to = '/contacto'>Contact</Link>
      <Link to = '/favoritos'>Favs</Link>
      <button onClick={cambiartema}>Change theme</button>
    </nav>
  )

}

export default Navbar