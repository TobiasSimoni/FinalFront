import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal, useContextGlobal } from '../Components/utils/Context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {


 const [dentist, setdentist] = useState({})
 const params = useParams()

 useEffect(()=>{
      axios('https://jsonplaceholder.typicode.com/users/'+params.id)
      .then(res => setdentist(res.data) )
 },[])

  return (
    <>
    <div>
      <h1>Detail Dentist  </h1>
      
      <h3>{dentist.name}</h3>
      <h4>{dentist.email}</h4>
      <h4>{dentist.phone}</h4>
      <h5>{dentist.website} </h5>
      </div>
    </>
  )
}

export default Detail