import React from 'react';

function IndianPlayers() {
  const T20players = ['Kohli', 'Rohit', 'Pant', 'Hardik'];
  const RanjiPlayers = ['Pujara', 'Rahane', 'Ishant', 'Saha'];

  const merged = [...T20players, ...RanjiPlayers];

  const [odd, even] = [
    merged.filter((_, i) => i % 2 !== 0),
    merged.filter((_, i) => i % 2 === 0)
  ];

  return (
    <div>
      <h3>Odd Team Players</h3>
      {odd.map((p, i) => <p key={i}>{p}</p>)}
      <h3>Even Team Players</h3>
      {even.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
}

export default IndianPlayers;