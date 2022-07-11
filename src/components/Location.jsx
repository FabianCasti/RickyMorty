import React from 'react';

const Location = (location) => {
  console.log(location.location.name);
  return (
    <div className='row'>
      <div className='col-12 text-center'>
        <h1>{location.location.name}</h1>
        
      </div>
      <div className='col d-flex justify-content-center gap-5'>
        <p><b>Type:</b> {location.location.type}</p>
        <p><b>Dimension:</b>{location.location.dimension}</p>
        <p><b>Population:</b>{location.location.residents?.length}</p>
      </div>      
    </div>
  );
};

export default Location;