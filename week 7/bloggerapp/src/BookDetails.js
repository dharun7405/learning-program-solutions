import React from 'react';

function BookDetails() {
  const books = ['React Basics', 'JS Mastery', 'ES6 Essentials'];
  return (
    <div>
      <h3>Books</h3>
      <ul>
        {books.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}

export default BookDetails;