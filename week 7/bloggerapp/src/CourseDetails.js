import React from 'react';

function CourseDetails() {
  const courses = ['Frontend Bootcamp', 'Fullstack Development'];

  return (
    <div>
      <h3>Courses</h3>
      <ul>
        {courses.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </div>
  );
}

export default CourseDetails;