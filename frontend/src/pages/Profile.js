import React from 'react';

const Profile = () => {
  const user = {
    username: 'john_doe',
    email: 'john_doe@example.com',
    avatar: 'https://via.placeholder.com/150',
    level: 5,
    xp: 1200,
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded p-6">
        <img src={user.avatar} alt={user.username} className="rounded-full w-32 h-32 mx-auto" />
        <h2 className="text-center text-2xl mt-4">{user.username}</h2>
        <p className="text-center text-gray-600">{user.email}</p>
        <div className="mt-4 text-center">
          <p>Level: {user.level}</p>
          <p>XP: {user.xp}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
