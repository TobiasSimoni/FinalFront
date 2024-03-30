

import { useEffect, useState } from 'react';
import Card from '../Components/Card'
import axios from 'axios'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {


 
    const [list,setlist] = useState([])
    
     useEffect(() => {   
       axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setlist(res.data))
     },[])
     console.log(list);
  
  
  return (
    <main >
      <h1>Home</h1>
      <div className='card-grid'>
        {list.map((dentista)=><Card key={dentista.id} item ={dentista} />)}
        
      </div>
    </main>
  )
}

export default Home