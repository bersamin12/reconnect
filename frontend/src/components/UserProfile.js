import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="p-4">
      <img src={user.avatar} alt={user.username} className="rounded-full w-32 h-32 mx-auto" />
      <h2 className="text-center text-2xl mt-4">{user.username}</h2>
      <p className="text-center text-gray-600">{user.email}</p>
      <div className="mt-4 text-center">
        <p>Level: {user.level}</p>
        <p>XP: {user.xp}</p>
      </div>
    </div>
  );
};

export default UserProfile;
