import React from 'react';

const players = [
  { name: 'Kohli', score: 95 },
  { name: 'Rohit', score: 88 },
  { name: 'Dhawan', score: 50 },
  { name: 'Pant', score: 45 },
  { name: 'Hardik', score: 85 },
  { name: 'Jadeja', score: 70 },
  { name: 'Bumrah', score: 55 },
  { name: 'Ashwin', score: 90 },
  { name: 'Gill', score: 65 },
  { name: 'Iyer', score: 75 },
  { name: 'Surya', score: 60 }
];

function ListofPlayers() {
  const filtered = players.filter(player => player.score >= 70);
  return (
    <div>
      <h2>Top Players</h2>
      {filtered.map(p => (
        <p key={p.name}>{p.name}: {p.score}</p>
      ))}
    </div>
  );
}

export default ListofPlayers;