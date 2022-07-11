import { useEffect, useState } from 'react'
import './App.css'
import Location from './components/Location';
import axios from 'axios';
import Residentinfo from './components/Residentinfo';

function App() {
  const [location, setlocation] = useState({})
  const [search, setsearch] = useState('')
  let ran = Math.floor(Math.random()*126)
  
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${ran}`)
      .then(res => setlocation(res.data))
  }, [])
  const serch =() => {
    axios.get(`https://rickandmortyapi.com/api/location/${search}`)
      .then(res => setlocation(res.data))

  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col banner">

        </div>
      </div>

      <div className='row'>
        <div className='col d-flex justify-content-center mt-3'>
          <input type="text" onChange={e=>setsearch(e.target.value)} value=
          {search} placeholder= 'Enter a number from 1 to 126'style={{ width: '14.5rem' }} />
          <button onClick={serch}>Search</button>
        </div>
      </div>
      <Location location={location} />

      <div className='row'>
        {
          location.residents?.map((rs,id) => (
            <Residentinfo rs={rs} key={id} />

          ))
        }
      
      </div>

    </div>
  );
}

export default App;
