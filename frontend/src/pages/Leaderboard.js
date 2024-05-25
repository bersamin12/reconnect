import React from 'react';

const Leaderboard = () => {
  const users = [
    { id: 1, username: 'john_doe', xp: 1200 },
    { id: 2, username: 'jane_doe', xp: 1150 },
    { id: 3, username: 'user123', xp: 1100 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center mb-4">Leaderboard</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">XP</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="bg-white shadow-md rounded p-4 mb-4">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.xp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
