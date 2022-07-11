import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Residentinfo = ({ rs }) => {

  const [residents, setresidents] = useState({})

  useEffect(() => {
    axios.get(rs)
      .then(res => setresidents(res.data))
  }, [residents])


  return (
    <div className='col d-flex justify-content-center mb-4'>

      <div className="card" style={{ width: '16rem' }} >
        <img src={residents.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{residents.name} </h5>
          <p className="card-text"><b>Raza:</b> {residents.species} </p>
          <p className="card-text"><b>Origin:</b> {residents.origin?.name} </p>
          <p className="card-text"><b>Episodes where appear:</b> {residents.episode?.length} </p>
          {
            residents.status === 'Alive'?
              <span className='badge  colorv'>Alive</span>
              :residents.status === 'Dead'?
              <span className='badge  colorm'>Dead</span>
              :
              <span className='badge  colord'>Unknown</span>

          }
        </div>
      </div>

    </div>
  );
};

export default Residentinfo;