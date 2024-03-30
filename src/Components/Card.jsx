import React from "react";
import { Link } from "react-router-dom";
import { ContextGlobal, useContextGlobal } from "./utils/Context";



const Card = ({item}) => {
  console.log(item)
  const {name,username} = item
  const {dispatch} = useContextGlobal(ContextGlobal)

  const addFav = ()=>{
    dispatch({type: 'ADD_FAVS',payload:item})
  }

  return (
    <div className="card">


      <img src="../../public/images/doctor.jpg" alt="" width={200} />
        <h3>{name} </h3>
        <h4>{username} </h4>
        
        <Link to= {'/detalles/' + item.id}>Detalles</Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
