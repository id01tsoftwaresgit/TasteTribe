import React, { useState, useEffect } from 'react';
import { useData } from '../providers/DataProvider';
import TribeCard from '../components/TribeCard';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  const { getTribes } = useData();
  const [tribes, setTribes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTribes = async () => {
      try {
        setLoading(true);
        const tribeData = await getTribes();
        setTribes(tribeData);
      } catch (err) {
        setError('Failed to fetch tribes. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTribes();
  }, [getTribes]);

  return (
    <div>
      <h1 className="text-3xl font-bold">{t('home.title')}</h1>
      <p className="mt-2 text-gray-600">{t('home.subtitle')}</p>

      <div className="mt-8">
        {loading && <p>Loading experiences...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && (
          <>
            {tribes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {tribes.map(tribe => (
                  <TribeCard key={tribe.id} tribe={tribe} />
                ))}
              </div>
            ) : (
              <p>No tribes found. Be the first to create one!</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
