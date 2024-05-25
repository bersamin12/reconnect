import React from 'react';

const Quests = () => {
  // Sample quests data
  const quests = [
    { id: 1, title: 'Build a Website', description: 'Create a website for a local charity.', xp_reward: 100 },
    { id: 2, title: 'Organize a Food Drive', description: 'Coordinate a food drive for the community.', xp_reward: 200 },
    { id: 3, title: 'Teach a Class', description: 'Volunteer to teach a class on coding.', xp_reward: 150 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center mb-4">Available Quests</h1>
      {quests.map(quest => (
        <div key={quest.id} className="bg-white shadow-md rounded p-4 mb-4">
          <h3 className="text-xl">{quest.title}</h3>
          <p>{quest.description}</p>
          <p>XP Reward: {quest.xp_reward}</p>
        </div>
      ))}
    </div>
  );
};

export default Quests;
