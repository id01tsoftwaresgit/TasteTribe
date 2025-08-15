import React from 'react';
import { useParams } from 'react-router-dom';

const TribePage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold">Tribe Details</h1>
      <p className="mt-2 text-gray-600">Displaying content for Tribe ID: {id}</p>
      {/* Creator bio, subscribe button, and post cards will go here */}
    </div>
  );
};

export default TribePage;
