import React, { useState } from 'react';

function GuestPage() {
  return <h2>Flight Details (Guest View)</h2>;
}

function UserPage() {
  return <h2>Book Your Tickets (User View)</h2>;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <UserPage /> : <GuestPage />}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default App;