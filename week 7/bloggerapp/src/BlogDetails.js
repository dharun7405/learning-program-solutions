import React from 'react';

function BlogDetails() {
  const blogs = ['React Events', 'JSX Tips', 'Conditional Rendering'];

  return (
    <div>
      <h3>Blogs</h3>
      <ul>
        {blogs.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}

export default BlogDetails;