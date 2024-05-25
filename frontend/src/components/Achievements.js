import React from 'react';

const achievements = [
  { id: 1, title: 'First Quest', description: 'Complete your first quest' },
  { id: 2, title: 'Helper', description: 'Help 10 people' },
  // more achievements
];

const Achievements = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl text-center mb-4">Achievements</h1>
    {achievements.map((ach) => (
      <div key={ach.id} className="bg-white shadow-md rounded p-4 mb-4">
        <h3 className="text-xl">{ach.title}</h3>
        <p>{ach.description}</p>
      </div>
    ))}
  </div>
);

export default Achievements;
