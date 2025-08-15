import React, { useState, useEffect } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { useData } from '../providers/DataProvider';
import CreateTribeForm from '../components/studio/CreateTribeForm';
import Button from '../components/ui/Button';

const CreatorStudioPage = () => {
  const { currentUser } = useAuth();
  const { getTribesByOwner } = useData();
  const [userTribes, setUserTribes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const fetchUserTribes = async () => {
    if (currentUser) {
      setLoading(true);
      const tribes = await getTribesByOwner(currentUser.uid);
      setUserTribes(tribes);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserTribes();
  }, [currentUser]);

  const handleTribeCreated = () => {
    setShowCreateForm(false);
    fetchUserTribes(); // Refresh the list after a new tribe is created
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Creator Studio</h1>
          <p className="mt-2 text-gray-600">Manage your tribes, posts, and monetization.</p>
        </div>
        <Button onClick={() => setShowCreateForm(prev => !prev)}>
          {showCreateForm ? 'Cancel' : 'Create New Tribe'}
        </Button>
      </div>

      {showCreateForm && <div className="mb-8"><CreateTribeForm onTribeCreated={handleTribeCreated} /></div>}

      <div>
        <h2 className="text-xl font-bold mb-4">Your Tribes</h2>
        {loading ? (
          <p>Loading your tribes...</p>
        ) : userTribes.length > 0 ? (
          <div className="space-y-4">
            {userTribes.map(tribe => (
              <div key={tribe.id} className="p-4 bg-white border rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{tribe.title}</h3>
                  <p className="text-sm text-gray-500">{tribe.city || 'No city'} - <span className={`font-semibold ${tribe.status === 'published' ? 'text-green-600' : 'text-yellow-600'}`}>{tribe.status}</span></p>
                </div>
                <Button variant="secondary">Edit</Button>
              </div>
            ))}
          </div>
        ) : (
          <p>You haven&apos;t created any tribes yet.</p>
        )}
      </div>
    </div>
  );
};

export default CreatorStudioPage;
