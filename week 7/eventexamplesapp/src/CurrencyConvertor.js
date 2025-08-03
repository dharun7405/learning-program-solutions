import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [converted, setConverted] = useState(null);

  const handleSubmit = () => {
    const euro = amount / 88;
    setConverted(euro.toFixed(2));
  };

  return (
    <div>
      <h3>Currency Convertor</h3>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Enter amount in INR"
      />
      <button onClick={handleSubmit}>Convert</button>
      {converted && <p>EUR: €{converted}</p>}
    </div>
  );
}

export default CurrencyConvertor;