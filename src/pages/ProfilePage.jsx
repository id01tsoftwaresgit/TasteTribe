import React from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold">User Profile</h1>
      <p className="mt-2 text-gray-600">Public profile for user: {id}</p>
      {/* User bio, social links, and list of their public tribes will go here */}
    </div>
  );
};

export default ProfilePage;
