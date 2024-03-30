import React, { useState } from "react";


const Form = () => {
 const [usuario,setusuario] =useState({
  nombre: "",
  email: ""
, })
  const [show,setshow] = useState(false)
  const [error,seterror] = useState(false)
  
const handleSubmit = (event) =>{
  event.preventDefault()
  if(usuario.nombre.length > 5){
    setshow(true)
    seterror(false)
  }else{
    seterror(true)
  }
}



  return (
    <div>
      <form onSubmit={handleSubmit}>
       <label>Ingrese su nombre</label>
       <input type="text" onChange={(event)=>setusuario({...usuario,nombre:event.target.value})}/>
       <label >Ingrese su Email</label>
       <input type="email" onChange={(event)=>setusuario({...usuario,email:event.target.value})}/>
       <button>Enviar</button>
      </form>
      {show && <h4>Gracias {usuario.nombre} Te contactaremos cuanto antes  via mail</h4>}
      {error && <p>Por favor verifique su informacion nuevamente</p>}
    </div>
  );
};

export default Form;
