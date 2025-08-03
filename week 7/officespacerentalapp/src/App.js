import React from 'react';

function App() {
  const offices = [
    { name: 'Office A', rent: 50000, address: 'Mumbai' },
    { name: 'Office B', rent: 65000, address: 'Delhi' },
    { name: 'Office C', rent: 40000, address: 'Chennai' },
  ];

  return (
    <div>
      <h1>Office Space Rentals</h1>
      <img src="https://via.placeholder.com/150" alt="Office" />
      {offices.map((o, i) => (
        <div key={i} style={{ margin: '10px', border: '1px solid black', padding: '10px' }}>
          <p>Name: {o.name}</p>
          <p style={{ color: o.rent > 60000 ? 'green' : 'red' }}>Rent: ₹{o.rent}</p>
          <p>Address: {o.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;