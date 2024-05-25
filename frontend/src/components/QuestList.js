import React from 'react';

const QuestList = ({ quests }) => {
  return (
    <div className="p-4">
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

export default QuestList;
